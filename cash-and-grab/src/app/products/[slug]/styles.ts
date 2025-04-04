import styled from 'styled-components';

export const Container = styled.div`
  position: initial;
  height: auto;
  overflow-y: hidden;
  text-decoration: none;
  color: inherit;

  .ant-breadcrumb {
    margin: 16px 2%;
  }

  .ant-breadcrumb-link {
    color: white;
    text-transform: uppercase;
    font-family: 'Montserrat SemiBold';
    cursor: pointer;
  }

  .ant-breadcrumb-separator {
    color: white;
  }
`;

export const Buffer = styled.section`
  width: 100%;
  padding-top: 60px;
`;

export const BoxProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1120px) {
    padding: 0 8px;
  }
`;

export const OutlineProduct = styled.div`
  width: 1100px;
  height: auto;
  background-color: white;
  border-radius: 8px;
  margin-top: 30px;
  padding: 40px 70px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px;
  }
`;

export const OutlineWithImage = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: 1120px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    margin-bottom: 10px;
    width: 400px;
    height: 300px;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 25px;
    }
  }
`;

export const ProductInformation = styled.div`
  .ant-rate {
    color: black;
    margin-bottom: 30px;
  }
`;

export const ProductInformationTitle = styled.h1`
  font-family: 'Montserrat Regular';
  font-size: 25px;
  text-transform: capitalize;
`;

export const ProductInformationEmptyMessage = styled.h2`
  font-family: 'Montserrat Bold';
  font-size: 25px;
  text-transform: uppercase;
  color: red;
  margin-top: 30px;
`;

export const ProductInformationDescription = styled.p`
  font-family: 'Montserrat Light';
  font-size: 12px;
  margin: 0;
  margin-bottom: 30px;
`;

export const ProductInformationPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductInformationPrice = styled.span`
  font-family: 'Montserrat Bold';
  font-size: 22px;
  letter-spacing: 1px;
`;

export const ProductInformationShipping = styled.button`
  font-family: 'Montserrat Medium';
  font-size: 9px;
  padding: 6px 15px;
  color: white;
  background-color: #35c14f;
  text-transform: uppercase;
  outline: none;
  border-style: none;
  border-radius: 18px;
`;

export const ProductInformationQuantityContainer = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

export const ProductInformationQuantity = styled.h1`
  margin: 0;
  font-size: 13px;
  font-family: 'Montserrat Medium';
  margin-right: 30px;
`;

export const OtherProducts = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 620px) {
    padding: 0 8px;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const ContainerImageSection = styled.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;

  .anticon {
    margin-top: 8px;
    margin-right: 20px;
  }
`;

export const ContainerImageSectionTitle = styled.h1`
  font-family: 'Montserrat Light';
  font-size: 18px;
`;

export const DetailContainer = styled.div`
  border: 1px solid black;
  padding: 5px 60px;
  margin-top: 120px;

  @media (max-width: 768px) {
    margin-top: 80px;
    padding: 5px 25px;
  }
`;

export const DetailContainerTitle = styled.h1`
  margin-top: 5px;
  font-family: 'Montserrat Light';
  font-size: 18px;
  text-transform: capitalize;
`;

export const DetailContainerDescription = styled.p`
  font-family: 'Montserrat Light';
  font-size: 13px;
  text-align: justify;
`;

export const BuyButton = styled.section`
  display: flex;
  align-items: center;
  justify-content: start;
  border: 1px solid black;
  background-color: white;
  margin-top: 60px;
  width: 300px;
  height: 55px;
  border-radius: 8px;
  font-family: 'Montserrat Regular';
  font-size: 22px;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 620px) {
    width: 100%;
    justify-content: space-evenly;

    .anticon {
      margin-left: 0;
      margin-right: 0;
    }
  }

  .anticon {
    font-size: 25px;
    margin-left: 22px;
    margin-right: 58px;
  }
`;

export const ProductsComponent = styled.section`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 200px;
  margin-top: 150px;
  margin-bottom: 100px;
`;

export const ProductsComponentTitle = styled.h1`
  font-family: 'Montserrat SemiBold';
  letter-spacing: 1px;
  font-size: 18px;
  color: white;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const ProductsComponentList = styled.section`
  display: flex;
  background-color: white;
  gap: 17px;
  border-radius: 5px;
  padding: 10px 15px;

  .anticon {
    color: #312f92;
    font-size: 45px;
  }
`;
