import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <FooterContent>
        <FooterText>총 수량: 0개</FooterText>
        <FooterText>총 가격: 0개</FooterText>
        <FooterButton>주문 하기</FooterButton>
      </FooterContent>
    </Container>
  );
};

const Container = styled.section`
  width: 300px;
  height: 150px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  gap: 5px;
`;

const FooterText = styled.p`
  display: flex;
  width: 100%;
  justify-content: end;
  margin: 0;
`;
const FooterButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: black;
  color: white;
  margin-top: 10px;
  border: 0;
  font-size: medium;
`;
export default Footer;
