import styled from "styled-components";

export const Container = styled.div`
  position: initial;
  height: auto;
  overflow-y: hidden;

  .buffer {
    width: 100%;
    padding-top: 60px;
  }

  .ant-breadcrumb {
    margin: 40px 0;
    margin-left: 12%;
  }

  .ant-breadcrumb-link {
    font-size: 20px;
    color: white;
    text-transform: uppercase;
    font-family: "Montserrat SemiBold";
  }

  .ant-breadcrumb-separator {
    color: white;
    font-size: 22px;
  }
`;

export const BoxProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .container-product {
    width: 1100px;
    height: auto;
    background-color: white;
    border-radius: 8px;
    margin-top: 30px;
    padding: 40px 70px;

    .data-img-product {
      display: grid;
      grid-template-columns: 50% 50%;

      img {
        width: 400px;
        height: 300px;
      }
    }
  }
`;

export const Products = styled.div`
  .product-comp {
    display: flex;
  }
`;
