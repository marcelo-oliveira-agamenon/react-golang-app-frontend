'use client';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import {
  ShoppingCartOutlined,
  DeleteOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

import { authorization, Header, Footer } from '@/components';
import { useFavorite, useProduct } from '@/services';
import { Product, Favorite } from '@/models';
import { RootState } from '@/store';
import {
  Container,
  Box,
  Buffer,
  PageTitle,
  CardProfile,
  FavoriteContainer,
  NoProductsTitle,
  ImageContainer,
  DataFavorite,
  DataFavoriteTitle,
  QuantityFavorite,
  QuantityFavoritePrice,
  QuantityFavoriteTitle,
  SelectionBtns,
} from './styles';

function Favorites() {
  const loading = useSelector((state: RootState) => state.user.loading);
  const { removeProductFavorite, getFavoriteByUser } = useFavorite();
  const { getProduct } = useProduct();
  const [favorites, setFavorites] = useState<Array<Favorite>>([]);
  const [products, setProducts] = useState<Array<Product>>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    getFavoriteByUser({
      limit: '5',
      offset: '0',
    }).then(response => {
      setFavorites(response);

      if (response.length > 0) {
        response.map((value: Favorite) => {
          getProduct(value.ProductID).then(response => {
            let aux = products.concat([response]);
            setProducts(aux);
          });
          return null;
        });
      }
    });
  }, [count]);

  const deleteFavorite = (index: number): void => {
    removeProductFavorite(favorites[index].ID).then(() => {
      setCount(count + 1);
    });
  };

  return (
    <Container>
      <Header />
      <Buffer />
      <PageTitle>favoritos</PageTitle>

      <Box>
        <CardProfile>
          {loading ? (
            <LoadingOutlined />
          ) : products.length > 0 ? (
            products.map((value, index) => {
              return (
                <FavoriteContainer key={value.ID}>
                  <ImageContainer
                    src={value.ProductImage[0].ImageURL}
                    alt="product"
                  />

                  <DataFavorite>
                    <DataFavoriteTitle>{value.Name}</DataFavoriteTitle>

                    <QuantityFavorite>
                      <QuantityFavoriteTitle>
                        Quantidade: 1
                      </QuantityFavoriteTitle>
                      <QuantityFavoritePrice>
                        {'R$ ' + value.Value.toFixed(2).replace('.', ',')}
                      </QuantityFavoritePrice>
                    </QuantityFavorite>
                  </DataFavorite>

                  <SelectionBtns>
                    <Link
                      href={{
                        pathname: '/cart',
                        query: { product: value, quantity: 1 },
                      }}
                    >
                      <ShoppingCartOutlined />
                    </Link>
                    <DeleteOutlined onClick={() => deleteFavorite(index)} />
                  </SelectionBtns>
                </FavoriteContainer>
              );
            })
          ) : (
            <NoProductsTitle>Sem Produtos Favoritos!</NoProductsTitle>
          )}
        </CardProfile>
      </Box>
      <Footer />
    </Container>
  );
}

export default authorization(Favorites);
