import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { getPromotions, getRecents, Product } from "../../ducks/product";
import { Category, getCategories } from "../../ducks/category";
import { LoadingOutlined } from "@ant-design/icons";

import { Container, Banner, ContSearch, Section } from "./styles";
import Header from "../../components/header";
import SearchBar from "../../components/searchbar";
import ProductComp from "../../components/product";
import CategoryComp from "../../components/category";
import Footer from "../../components/footer";
import BannerImg from "../../assets/image/banner_home.jpg";

interface props extends RouteComponentProps<any> {
  getPromotions: () => Promise<any>;
  getRecents: () => Promise<any>;
  getCategories: () => Promise<any>;
}

function Home(props: props) {
  const [promotions, setPromotions] = useState<Array<Product>>([]);
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [recents, setRecents] = useState<Array<Product>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    props
      .getPromotions()
      .then((res) => {
        setPromotions(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });

    props
      .getRecents()
      .then((res) => {
        setRecents(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });

    props
      .getCategories()
      .then((res) => {
        setCategories(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header {...props} />
      <Banner>
        <div></div>
        <img src={BannerImg} alt="banner" />
      </Banner>
      <ContSearch>
        <SearchBar {...props} />
      </ContSearch>

      <Section>
        <div className="component">
          <h1>categorias</h1>
          <div className="category">
            {loading ? (
              <LoadingOutlined />
            ) : (
              categories?.map((category) => {
                return <CategoryComp key={category.ID} data={category} />;
              })
            )}
          </div>
        </div>
      </Section>

      <Section>
        <div className="component">
          <h1>em promoção</h1>
          <div className="product">
            {loading ? (
              <LoadingOutlined />
            ) : (
              promotions?.map((product) => {
                return (
                  <ProductComp key={product.ID} product={product} {...props} />
                );
              })
            )}
          </div>
        </div>
      </Section>

      <Section>
        <div className="component">
          <h1>recentes</h1>
          <div className="product">
            {loading ? (
              <LoadingOutlined />
            ) : (
              recents?.map((product) => {
                return (
                  <ProductComp key={product.ID} product={product} {...props} />
                );
              })
            )}
          </div>
        </div>
      </Section>

      <Footer />
    </Container>
  );
}

export default connect(null, {
  getPromotions,
  getRecents,
  getCategories,
})(Home);
