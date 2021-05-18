import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

import { Container } from './styles';

interface props extends RouteComponentProps {}

function Searchbar(props: props) {
  const [search, setSearch] = useState<string>('');
  const handleChange = () => {
    props.history.push({
      pathname: '/search',
      state: search,
    });
  };

  return (
    <Container>
      <h1>busque pelos melhores produtos!</h1>
      <div>
        <SearchOutlined onClick={() => handleChange()} />
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
}

export default Searchbar;
