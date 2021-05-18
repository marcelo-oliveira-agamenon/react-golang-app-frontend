import styled from 'styled-components';

export const Container = styled.div`
  position: initial;
  height: auto;
  overflow-y: hidden;

  .buffer {
    width: 100%;
    padding-top: 60px;
  }

  .main-container-h1 {
    margin-top: 70px;
    margin-bottom: 50px;
    margin-left: 8%;
    font-family: 'Montserrat SemiBold';
    font-size: 22px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: white;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1020px) {
    padding: 0 8px;
  }

  .card-profile {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 50px;
    padding: 40px 60px;
    width: 1000px;
    height: auto;
    background-color: white;
    border-radius: 8px;

    @media (max-width: 1020px) {
      width: 100%;
      padding: 40px 30px;
    }

    .anticon-spin {
      font-size: 80px;
      color: #312f92;
    }
  }
`;
