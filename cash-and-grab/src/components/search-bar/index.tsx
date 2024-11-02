'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchOutlined } from '@ant-design/icons';

import { Container, InputSearch, TitleSearch, InputContainer } from './styles';

export const Searchbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  const handleChange = () => {
    router.push('/search', {
      search: search,
    });
  };

  return (
    <Container>
      <TitleSearch>busque pelos melhores produtos!</TitleSearch>
      <InputContainer>
        <SearchOutlined onClick={handleChange} />
        <InputSearch
          value={search}
          onChange={event => setSearch(event.target.value)}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              handleChange();
            }
          }}
        />
      </InputContainer>
    </Container>
  );
};
