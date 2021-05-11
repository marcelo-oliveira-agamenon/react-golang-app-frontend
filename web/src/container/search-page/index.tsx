import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { searchProduct, Product } from 'ducks/product';

import { Container, ContSearch, ProductSearch } from './styles';
import Header from 'components/header';
import Footer from 'components/footer';
import SearchBar from 'components/searchbar';
import ProductComp from 'components/product';

interface props extends RouteComponentProps {
  searchProduct: (value: string) => Promise<any>;
}

function SearchPage(props: props) {
  const [search, setSearch] = useState<Array<Product>>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    let value: any = props.location.state;
    props.searchProduct(value).then(res => {
      setSearch(res);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location.state]);

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
      </ProductSearch>
      <Footer />
    </Container>
  );
}

export default connect(null, {
  searchProduct,
})(SearchPage);
