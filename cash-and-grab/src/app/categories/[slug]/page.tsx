'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import { useParams } from 'next/navigation';
import { LoadingOutlined } from '@ant-design/icons';

import { RootState } from '@/store';
import { useProduct } from '@/services';
import { Product } from '@/models';
import {
  authorization,
  Header,
  Footer,
  Searchbar,
  ProductCard,
} from '@/components';
import {
  Container,
  ContSearch,
  Content,
  CategoriesContainer,
  CategoryComponent,
  PageTitle,
} from './styles';

function Categories() {
  const params = useParams<{ slug: string }>();
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  const loading = useSelector((state: RootState) => state.user.loading);
  const { getProductByCategory } = useProduct();
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    getProducts();
  }, []);

  const getProducts = useCallback(async () => {
    const products = await getProductByCategory(params.slug);
    setProducts(products);
  }, []);

  return (
    <Container>
      <Header />
      <ContSearch>
        <Searchbar />
      </ContSearch>

      <Content>
        <PageTitle>{name ?? ''}</PageTitle>

        <CategoriesContainer>
          {loading ? (
            <LoadingOutlined />
          ) : (
            products.map(product => {
              return (
                <CategoryComponent key={product.ID}>
                  <ProductCard {...product} />
                </CategoryComponent>
              );
            })
          )}
        </CategoriesContainer>
      </Content>
      <Footer />
    </Container>
  );
}

export default authorization(Categories);
