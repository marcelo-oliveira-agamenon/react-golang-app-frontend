import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { SearchOutlined } from '@ant-design/icons';

import { Container } from './styles';

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
      <h1>busque pelos melhores produtos!</h1>
      <div>
        <SearchOutlined onClick={handleChange} />
        <input
          value={search}
          onChange={event => setSearch(event.target.value)}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              handleChange();
            }
          }}
        />
      </div>
    </Container>
  );
};
