import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Favorite, getFavoriteByUser, deleteFavorite } from 'ducks/favorite';
import { Product, getProductbyID } from 'ducks/product';
import {
  ShoppingCartOutlined,
  DeleteOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

import { Container, Box } from './styles';
import Header from 'components/header';
import Footer from 'components/footer';

interface props extends RouteComponentProps {
  getFavoriteByUser: () => Promise<any>;
  getProductbyID: (productID: string) => Promise<any>;
  deleteFavorite: (favoriteID: string) => Promise<any>;
}

function Favorites(props: props) {
  const [favorites, setFavorites] = useState<Array<Favorite>>([]);
  const [products, setProducts] = useState<Array<Product>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setLoading(true);

    props
      .getFavoriteByUser()
      .then(response => {
        setFavorites(response);

        if (response.length > 0) {
          response.map((value: Favorite) => {
            props.getProductbyID(value.ProductID).then(response => {
              let aux = products.concat([response]);
              setProducts(aux);
            });
            return null;
          });
        }

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const deleteFavorite = (index: number): void => {
    props.deleteFavorite(favorites[index].ID).then(() => {
      setCount(count + 1);
    });
  };

  return (
    <Container>
      <Header {...props} />
      <div className="buffer"></div>
      <h1 className="main-container-h1">favoritos</h1>

      <Box>
        <div className="card-profile">
          {loading ? (
            <LoadingOutlined />
          ) : products.length > 0 ? (
            products.map((value, index) => {
              return (
                <div className="favorite-comp" key={value.ID}>
                  <img src={value.ProductImage[0].ImageURL} alt="product" />

                  <div className="data-favorite">
                    <h1>{value.Name}</h1>

                    <div>
                      <p>Quantidade: 1</p>
                      <span>
                        {'R$ ' + value.Value.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>

                  <section>
                    <ShoppingCartOutlined
                      onClick={() =>
                        props.history.push({
                          pathname: '/cart',
                          state: {
                            product: value,
                            quantity: 1,
                          },
                        })
                      }
                    />
                    <DeleteOutlined onClick={() => deleteFavorite(index)} />
                  </section>
                </div>
              );
            })
          ) : (
            <span>Sem Produtos Favoritos!</span>
          )}
        </div>
      </Box>
      <Footer />
    </Container>
  );
}

export default connect(null, {
  getFavoriteByUser,
  getProductbyID,
  deleteFavorite,
})(Favorites);
