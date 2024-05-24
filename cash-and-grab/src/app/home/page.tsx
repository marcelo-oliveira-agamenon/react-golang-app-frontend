'use client';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { LoadingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import { Header, Searchbar, Footer } from '@/components';
import { RootState } from '@/store';
import { Container, Banner, ContSearch, Section } from './styles';
import { useCategory, useProduct } from '@/services';
import { Category, Product } from '@/models';

export default function Home() {
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
    const [categories, promotions] = await Promise.all([
      getCategories(),
      getAllProducts(),
    ]);
    setCategories(categories);
    setPromotions(promotions);
  }, []);

  const aa = [
    {
      id: 1,
      type: 'category',
      title: 'categorias',
    },
    {
      id: 2,
      type: 'product',
      title: 'em promoção',
    },
    {
      id: 3,
      type: 'product',
      title: 'recentes',
    },
  ];

  return (
    <Container>
      <Header />
      <Banner>
        <div></div>
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

      {aa.map(value => (
        <Section key={value.id}>
          <div className="component">
            <h1>{value.title}</h1>
            <div className={value.type}>
              {loading ? (
                <LoadingOutlined />
              ) : (
                <>
                  {value.type === 'category' ? (
                    <>
                      {categories?.map(category => {
                        return (
                          <CategoryCard key={category.ID} category={category} />
                        );
                      })}
                    </>
                  ) : (
                    <>
                      {promotions?.map(product => {
                        return (
                          <ProductCard key={product.ID} product={product} />
                        );
                      })}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </Section>
      ))}

      <Footer />
    </Container>
  );
}
