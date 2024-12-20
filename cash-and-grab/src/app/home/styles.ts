import styled from 'styled-components';

export const Container = styled.div`
  position: initial;
  height: auto;
  overflow-y: hidden;
`;

export const Banner = styled.div`
  width: 100%;
  height: 280px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    margin-bottom: 50px;
  }
`;

export const SpacingBanner = styled.div`
  width: 100%;
  padding-top: 60px;
`;

export const ContSearch = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: center;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
`;

export const SectionTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 200px;
  margin-top: 100px;
  margin-bottom: 80px;
`;

export const SectionTitle = styled.h1`
  font-family: 'Montserrat SemiBold';
  letter-spacing: 1px;
  font-size: 18px;
  color: white;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const SectionCategory = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 20px;
  overflow-x: auto;
  min-height: 280px;
`;

export const SectionProduct = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  overflow-x: auto;
  min-height: 280px;
  gap: 17px;
  border-radius: 5px;
  padding: 10px 15px;

  .anticon {
    color: #312f92;
    font-size: 45px;
  }
`;
