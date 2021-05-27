import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { searchProduct, Product } from 'ducks/product';

import { Container, ContSearch, ProductSearch } from './styles';
import Header from 'components/header';
import Footer from 'components/footer';
import SearchBar from 'components/searchbar';
import ProductComp from 'components/product';

interface props extends RouteComponentProps {
  searchProduct: (value: string, limit: number, offset: number) => Promise<any>;
}

const LIMIT: number = 5;

function SearchPage(props: props) {
  const { searchProduct } = props;
  const [search, setSearch] = useState<Array<Product>>([]);
  const [offset, setOffset] = useState<number>(0);
  const value: any = props.location.state;

  useEffect(() => {
    window.scrollTo(0, 0);

    searchProduct(value, LIMIT, offset).then(res => {
      setSearch(res);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePaginationLoad = useCallback(async () => {
    await searchProduct(value, LIMIT, offset).then(res => {
      setSearch(res);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  useEffect(() => {
    handlePaginationLoad();
  }, [handlePaginationLoad]);

  return (
    <Container>
      <Header {...props} />
      <ContSearch>
        <SearchBar {...props} />
      </ContSearch>
      <ProductSearch>
        <h1>BUSCANDO POR: "{props.location.state}"</h1>
        <div className="center">
          {search?.map(product => {
            return (
              <div key={product.ID} className="content">
                <ProductComp {...props} product={product} />
              </div>
            );
          })}
        </div>

        {search && search.length >= 5 ? (
          <h2 onClick={() => setOffset(offset => offset + 5)}>Carregar Mais</h2>
        ) : null}

        {search && !search.length ? (
          <h2>Desculpe, produto {value} não encontrado!</h2>
        ) : null}
      </ProductSearch>
      <Footer />
    </Container>
  );
}

export default connect(null, {
  searchProduct,
})(SearchPage);
