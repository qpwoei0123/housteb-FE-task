import styled from "styled-components";
import useTotalPriceStore from "../store/TotalPriceStore";
import useTotalQuantityStore from "../store/TotalQuantityStore";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const totalPrice = useTotalPriceStore((state) => state.totalPrice);
  const totalQuantity = useTotalQuantityStore((state) => state.totalQuantity);
  const navigate = useNavigate();
  const handler = () => {
    navigate("/complete");
  };
  return (
    <Container>
      <FooterContent>
        <FooterText>{`총 수량: ${totalQuantity}개`}</FooterText>
        <FooterText>{`총 가격: ${totalPrice}원`}</FooterText>
        <FooterButton onClick={handler} disabled={totalQuantity == 0}>
          주문 하기
        </FooterButton>
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
  background-color: ${(props) => (props.disabled ? "#888" : "black")};
  color: ${(props) => (props.disabled ? "#ccc" : "white")};
  margin-top: 10px;
  border: 0;
  font-size: medium;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
`;
export default Footer;
