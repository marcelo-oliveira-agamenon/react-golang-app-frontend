import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductByCategory, Product } from 'ducks/product';
import { LoadingOutlined } from '@ant-design/icons';

import { Container, ContSearch, Content } from './styles';
import Header from 'components/header';
import Footer from 'components/footer';
import SearchBar from 'components/searchbar';
import ProductComp from 'components/product';

interface props extends RouteComponentProps<any> {
  getProductByCategory: (categoryID: string) => Promise<any>;
}

interface state {
  categoryID: string;
  name: string;
}

function Categories(props: props) {
  const { state } = useLocation<state>();
  const [products, setProducts] = useState<Array<Product>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    setLoading(true);

    props
      .getProductByCategory(state.categoryID)
      .then(response => {
        setProducts(response);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header {...props} />
      <ContSearch>
        <SearchBar {...props} />
      </ContSearch>

      <Content>
        <h1>{state.name}</h1>

        <div className="container-categories">
          {loading ? (
            <LoadingOutlined />
          ) : (
            products.map(product => {
              return (
                <div key={product.ID} className="each">
                  <ProductComp product={product} {...props} />
                </div>
              );
            })
          )}
        </div>
      </Content>
      <Footer />
    </Container>
  );
}

export default connect(null, {
  getProductByCategory,
})(Categories);
