import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemBox from "../components/ItemBox";

const OrderPage = () => {
  return (
    <>
      <Header />
      <Container>
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  width: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 170px;
  gap: 15px;
`;

export default OrderPage;
