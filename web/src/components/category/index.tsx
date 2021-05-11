import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Category } from 'ducks/category';

import { Container } from './styles';
interface props extends RouteComponentProps<any> {
  category: Category;
}

const category: React.FC<props> = ({ category, history }) => {
  return (
    <Container
      onClick={() =>
        history.push({
          pathname: '/categories',
          state: {
            categoryID: category.ID,
            name: category.Name,
          },
        })
      }
    >
      <img src={category.ImageURL} alt="banner" />
      <h1>{category.Name}</h1>
    </Container>
  );
};

export default category;
