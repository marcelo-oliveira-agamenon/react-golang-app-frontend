import styled from 'styled-components';

export const Container = styled.div`
  position: initial;
  height: auto;
  overflow-y: hidden;
`;

export const ContSearch = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: center;
`;

export const ProductSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  min-height: 300px;
  height: 100%;
`;

export const SearchCenter = styled.div`
  min-width: 700px;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 50px;
  justify-content: center;
`;

export const SearchContent = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  height: 260px;
`;

export const ProductSearchTitle = styled.h1`
  align-self: flex-start;
  font-family: 'Montserrat Bold';
  color: white;
  font-size: 20px;
  margin-bottom: 50px;
  margin-left: 240px;
`;

export const ProductSearchMessage = styled.h2`
  font-family: 'Montserrat Bold';
  color: white;
  font-size: 22px;
  margin-top: 80px;
  cursor: pointer;
`;
