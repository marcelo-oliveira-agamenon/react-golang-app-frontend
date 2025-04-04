'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Breadcrumb, Rate, InputNumber } from 'antd';
import {
  ShareAltOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

import { authorization, Header, Footer, ProductCard } from '@/components';
import { Product, Category } from '@/models';
import { RootState, addOrderToCart } from '@/store';
import { useProduct, useCategory, useFavorite } from '@/services';
import { formatToCurrency, query } from '@/util';
import {
  Container,
  BoxProduct,
  OtherProducts,
  Buffer,
  ProductsComponent,
  ProductsComponentList,
  ProductsComponentTitle,
  OutlineProduct,
  OutlineWithImage,
  ProductInformation,
  ProductInformationDescription,
  ProductInformationEmptyMessage,
  ProductInformationPrice,
  ProductInformationPriceContainer,
  ProductInformationQuantity,
  ProductInformationQuantityContainer,
  ProductInformationShipping,
  ProductInformationTitle,
  ContainerImage,
  ContainerImageSection,
  ContainerImageSectionTitle,
  BuyButton,
  DetailContainer,
  DetailContainerDescription,
  DetailContainerTitle,
} from './styles';

//TODO: add loading in this page, add cart logic here, favorite logic
function Products() {
  const params = useParams<{ slug: string }>();
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.user.loading);
  const { getAllProducts, getProduct } = useProduct();
  const { getCategory } = useCategory();
  const { addProductFavorite } = useFavorite();
  const [products, setProducts] = useState<Array<Product>>([]);
  const [product, setProduct] = useState<Product>();
  const [category, setCategory] = useState<Category>();
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    window.scrollTo(0, 0);

    getProducts();
    getSelectedProduct();
  }, []);

  const getSelectedProduct = useCallback(async () => {
    const product = await getProduct(params.slug);

    setProduct(product);
    if (product) {
      const category = await getCategory(product.Categoryid.toString());
      setCategory(category);
    }
  }, []);

  const getProducts = useCallback(async () => {
    const products = await getAllProducts(query);
    setProducts(products);
  }, []);

  const addToFavorite = (id: string) => {
    addProductFavorite(id);
  };

  const addProductToCart = useCallback(() => {
    if (product && quantity) {
      addOrderToCart({
        product: product,
        quantity: quantity,
      });
    }
  }, [quantity, product]);

  return (
    <Container>
      <Header />
      <Buffer />
      <Breadcrumb
        items={[
          { title: <Link href="/home">Home</Link> },
          {
            title: (
              <Link
                href={{
                  pathname: `/categories/${category?.ID}`,
                  query: { name: category?.Name },
                }}
              >
                {category?.Name}
              </Link>
            ),
          },
          { title: product?.Name },
        ]}
      ></Breadcrumb>

      <BoxProduct>
        <OutlineProduct>
          <OutlineWithImage>
            <ContainerImage>
              <Image
                src={
                  product?.ProductImage && product?.ProductImage.length
                    ? product?.ProductImage[0].ImageURL
                    : '/avatar/avataaars.png'
                }
                width={80}
                height={80}
                alt="product"
                priority
              />
              <ContainerImageSection>
                <ShareAltOutlined />
                <h1>compartilhe</h1>
              </ContainerImageSection>
              <ContainerImageSection
                onClick={() => addToFavorite(product?.ID ?? '')}
              >
                <HeartOutlined />
                <ContainerImageSectionTitle>
                  adicionar aos favoritos
                </ContainerImageSectionTitle>
              </ContainerImageSection>
            </ContainerImage>

            <ProductInformation>
              <ProductInformationTitle>{product?.Name}</ProductInformationTitle>
              <Rate value={3} disabled />
              <ProductInformationDescription>
                {product?.Description}
              </ProductInformationDescription>
              <ProductInformationPriceContainer>
                <ProductInformationPrice>
                  {formatToCurrency(product?.Value ?? 0, 'pt-BR', 'BRL')}
                </ProductInformationPrice>
                {product?.HasShipping ? null : (
                  <ProductInformationShipping>
                    frete grátis
                  </ProductInformationShipping>
                )}
              </ProductInformationPriceContainer>
              <ProductInformationQuantityContainer>
                <ProductInformationQuantity>
                  Quantidade:
                </ProductInformationQuantity>
                <InputNumber
                  min={1}
                  value={quantity}
                  onChange={value => setQuantity(value ?? 1)}
                />
              </ProductInformationQuantityContainer>

              {product?.StockQtd && product.StockQtd > 0 ? (
                <BuyButton>
                  <Link href="/cart" onClick={addProductToCart}>
                    <ShoppingCartOutlined />
                    <span>comprar</span>
                  </Link>
                </BuyButton>
              ) : (
                <ProductInformationEmptyMessage>
                  Produto Esgotado
                </ProductInformationEmptyMessage>
              )}
            </ProductInformation>
          </OutlineWithImage>

          <DetailContainer>
            <DetailContainerTitle>detalhes técnicos</DetailContainerTitle>
            <DetailContainerDescription>
              {product?.TecnicalDetails}
            </DetailContainerDescription>
          </DetailContainer>
        </OutlineProduct>
      </BoxProduct>

      <OtherProducts>
        <ProductsComponent>
          <ProductsComponentTitle>outros produtos</ProductsComponentTitle>
          <ProductsComponentList>
            {products.map(product => {
              return <ProductCard key={product.ID} {...product} />;
            })}
          </ProductsComponentList>
        </ProductsComponent>
      </OtherProducts>
      <Footer />
    </Container>
  );
}

export default authorization(Products);
