import styled from "styled-components";
import logo from "../assets/logo-black.png";
import { Link } from "react-router-dom";

const RootPage = () => {
  return (
    <Container className="root-page">
      <img src={logo} alt="logo" />
      <Button to={"/order"}>
        <ButtonText>주문하러 가기</ButtonText>
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Button = styled(Link)`
  width: 150px;
  height: 80px;
  border-radius: 20px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration-line: none;
`;

const ButtonText = styled.p`
  color: black;
  font-size: x-large;
`;
export default RootPage;
