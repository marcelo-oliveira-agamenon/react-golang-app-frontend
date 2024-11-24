'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';

import {
  Header,
  Footer,
  Searchbar,
  ProductCard,
  authorization,
} from '@/components';
import { RootState } from '@/store/store';
import { useProduct } from '@/services';
import { Product } from '@/models';
import { query } from '@/util';
import {
  Container,
  ContSearch,
  ProductSearch,
  ProductSearchTitle,
  ProductSearchMessage,
  SearchCenter,
  SearchContent,
} from './styles';

function SearchPage() {
  const loading = useSelector((state: RootState) => state.user.loading);
  const { getAllProducts } = useProduct();
  const [search, setSearch] = useState<Array<Product>>([]);
  const [offset, setOffset] = useState<number>(0);
  const searchParams = useSearchParams();
  const value = searchParams.get('query')?.toString();

  useEffect(() => {
    getLoadProducts();
  }, []);

  const getLoadProducts = useCallback(async () => {
    window.scrollTo(0, 0);
    handlePaginationLoad();
  }, []);

  const handlePaginationLoad = useCallback(async () => {
    const product = await getAllProducts({
      ...query,
      name: value,
      offset: offset.toString(),
    });
    setSearch(product);
  }, [offset]);

  useEffect(() => {
    handlePaginationLoad();
  }, [handlePaginationLoad]);

  return (
    <Container>
      <Header />
      <ContSearch>
        <Searchbar />
      </ContSearch>
      <ProductSearch>
        <ProductSearchTitle>BUSCANDO POR: "{value}"</ProductSearchTitle>
        <SearchCenter>
          {search?.map(product => {
            return (
              <SearchContent key={product.ID}>
                <ProductCard {...product} />
              </SearchContent>
            );
          })}
        </SearchCenter>

        {search && search.length >= 5 ? (
          <ProductSearchMessage onClick={() => setOffset(offset => offset + 5)}>
            Carregar Mais
          </ProductSearchMessage>
        ) : null}

        {search && !search.length ? (
          <ProductSearchMessage>
            Desculpe, produto {value} não encontrado!
          </ProductSearchMessage>
        ) : null}
      </ProductSearch>
      <Footer />
    </Container>
  );
}

export default authorization(SearchPage);
