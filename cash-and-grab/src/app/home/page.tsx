'use client';
import { useCallback, useEffect, useState, ReactNode } from 'react';
import Image from 'next/image';
import { LoadingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import {
  Header,
  Searchbar,
  Footer,
  CategoryCard,
  ProductCard,
  authorization,
} from '@/components';
import { RootState } from '@/store';
import { useCategory, useProduct } from '@/services';
import { Category, Product } from '@/models';
import { cardsHomePage, query } from '@/util';
import {
  Container,
  Banner,
  ContSearch,
  Section,
  SectionTitle,
  SectionTwo,
  SectionCategory,
  SectionProduct,
  SpacingBanner,
} from './styles';

const LoadingSection = ({
  loading,
  children,
}: {
  loading: boolean;
  children: ReactNode;
}) => (loading ? <LoadingOutlined /> : <>{children}</>);

function Home() {
  const loading = useSelector((state: RootState) => state.user.loading);
  const { getCategories } = useCategory();
  const { getAllProducts } = useProduct();
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [promotions, setPromotions] = useState<Array<Product>>([]);
  const [recents, setRecents] = useState<Array<Product>>([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = useCallback(async () => {
    const [categories, promotions, recents] = await Promise.all([
      getCategories(query),
      getAllProducts({
        ...query,
        promotion: 'true',
      }),
      getAllProducts({
        ...query,
        recent: 'true',
      }),
    ]);
    setCategories(categories);
    setPromotions(promotions);
    setRecents(recents);
  }, []);

  return (
    <Container>
      <Header />
      <Banner>
        <SpacingBanner />
        <Image
          src="/image/banner_home.jpg"
          width={160}
          height={160}
          alt="banner"
          priority
        />
      </Banner>
      <ContSearch>
        <Searchbar />
      </ContSearch>
      {cardsHomePage.map(value => {
        const products = value.type === 'promotion' ? promotions : recents;

        return (
          <Section key={value.id}>
            <SectionTwo>
              <SectionTitle>{value.title}</SectionTitle>
              {value.type === 'category' ? (
                <LoadingSection loading={loading}>
                  <SectionCategory>
                    {categories.length
                      ? categories?.map(category => (
                          <CategoryCard key={category.ID} {...category} />
                        ))
                      : null}
                  </SectionCategory>
                </LoadingSection>
              ) : (
                <LoadingSection loading={loading}>
                  <SectionProduct>
                    {products.length
                      ? products?.map(product => (
                          <ProductCard key={product.ID} {...product} />
                        ))
                      : null}
                  </SectionProduct>
                </LoadingSection>
              )}
            </SectionTwo>
          </Section>
        );
      })}
      <Footer />
    </Container>
  );
}

export default authorization(Home);
