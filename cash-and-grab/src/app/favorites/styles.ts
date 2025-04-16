import styled from 'styled-components';

export const Container = styled.div`
  position: initial;
  height: auto;
  overflow-y: hidden;
`;

export const Buffer = styled.div`
  width: 100%;
  padding-top: 60px;
`;

export const PageTitle = styled.div`
  margin-top: 70px;
  margin-bottom: 50px;
  margin-left: 8%;
  font-family: 'Montserrat SemiBold';
  font-size: 22px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: white;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 40px 60px;
  width: 900px;
  height: auto;
  background-color: white;
  border-radius: 8px;

  @media (max-width: 920px) {
    width: 95%;
  }

  @media (max-width: 360px) {
    padding: 30px;
  }

  .anticon-spin {
    font-size: 80px;
    color: #312f92;
  }
`;

export const NoProductsTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: 'Montserrat Regular';
`;

export const FavoriteContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 2px solid black;

  @media (max-width: 920px) {
    justify-content: space-between;
  }

  @media (max-width: 360px) {
    flex-direction: column;
  }

  .anticon {
    font-size: 40px;
    cursor: pointer;
    margin-right: 40px;
  }
`;

export const ImageContainer = styled.img`
  width: 78px;
  height: 71px;
  border-radius: 15px;
  margin-right: 80px;

  @media (max-width: 920px) {
    margin-right: 0;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const DataFavorite = styled.div`
  display: flex;
  min-width: 300px;
  margin-right: 160px;
  flex-direction: column;
  row-gap: 10px;

  @media (max-width: 920px) {
    margin-right: 0;
  }

  @media (max-width: 720px) {
    min-width: auto;
  }
`;

export const DataFavoriteTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 0;
  font-family: 'Montserrat Regular';
  text-transform: capitalize;
`;

export const QuantityFavorite = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 740px) {
    justify-content: flex-start;
    gap: 8px;
  }

  @media (max-width: 360px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const QuantityFavoriteTitle = styled.p`
  margin-top: 5px;
  margin-bottom: 0;
  font-size: 13px;
  font-family: 'Montserrat Light';
`;

export const QuantityFavoritePrice = styled.span`
  font-size: 17px;
  font-family: 'Montserrat SemiBold';
`;

export const SelectionBtns = styled.section`
  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: 360px) {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
`;
