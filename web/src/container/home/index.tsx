import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPromotions } from "../../ducks/product";

import Header from "../../components/header";
import SearchBar from "../../components/searchbar";
import Product from "../../components/product";
import { Container, Banner, ContSearch, PromotionComp } from "./styles";
import BannerImg from "../../assets/image/banner_home.jpg";

interface props {
  getPromotions: () => Promise<any>;
}

function Home(props: props) {
  const [promotions, setPromotions] = useState<Array<any>>();

  useEffect(() => {
    props.getPromotions().then((res) => {
      setPromotions(res);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {console.log(promotions)}
      <Header />
      <Banner>
        <div></div>
        <img src={BannerImg} alt="banner" />
      </Banner>
      <ContSearch>
        <SearchBar />
      </ContSearch>

      <PromotionComp>
        <h1>em promoção</h1>
        <div>
          {promotions?.map((product) => {
            return <Product key={product.ID} product={product} />;
          })}
        </div>
      </PromotionComp>
    </Container>
  );
}

export default connect(null, {
  getPromotions,
})(Home);
