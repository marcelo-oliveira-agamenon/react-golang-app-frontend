import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { getPromotions, getRecents, Product } from "../../ducks/product";

import Header from "../../components/header";
import SearchBar from "../../components/searchbar";
import ProductComp from "../../components/product";
import Footer from "../../components/footer";
import { Container, Banner, ContSearch, PromotionComp } from "./styles";
import BannerImg from "../../assets/image/banner_home.jpg";

interface props extends RouteComponentProps<any> {
  getPromotions: () => Promise<any>;
  getRecents: () => Promise<any>;
}

function Home(props: props) {
  const [promotions, setPromotions] = useState<Array<Product>>();
  const [recents, setRecents] = useState<Array<Product>>();

  useEffect(() => {
    props.getPromotions().then((res) => {
      setPromotions(res);
    });
    props.getRecents().then((res) => {
      setRecents(res);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />
      <Banner>
        <div></div>
        <img src={BannerImg} alt="banner" />
      </Banner>
      <ContSearch>
        <SearchBar {...props} />
      </ContSearch>

      <PromotionComp>
        <div className="component">
          <h1>em promoção</h1>
          <div className="product">
            {promotions?.map((product) => {
              return (
                <ProductComp key={product.ID} product={product} {...props} />
              );
            })}
          </div>
        </div>
      </PromotionComp>

      <PromotionComp>
        <div className="component">
          <h1>recentes</h1>
          <div className="product">
            {recents?.map((product) => {
              return (
                <ProductComp key={product.ID} product={product} {...props} />
              );
            })}
          </div>
        </div>
      </PromotionComp>

      <Footer />
    </Container>
  );
}

export default connect(null, {
  getPromotions,
  getRecents,
})(Home);
