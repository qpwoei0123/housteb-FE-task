import styled from "styled-components";
import useTotalPriceStore from "../store/TotalPriceStore";
import useTotalQuantityStore from "../store/TotalQuantityStore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
  const totalPrice = useTotalPriceStore((state) => state.totalPrice);
  const totalQuantity = useTotalQuantityStore((state) => state.totalQuantity);
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [buttonText, setButtonText] = useState("주문 하기");

  const handleClick = () => {
    setIsButtonDisabled(true);
    setButtonText("로딩 중...");
    setTimeout(() => {
      navigate("/complete");
    }, 1000);
  };

  useEffect(() => {
    if (totalQuantity > 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [totalQuantity]);

  return (
    <Container>
      <FooterContent>
        <FooterText>{`총 수량: ${totalQuantity}개`}</FooterText>
        <FooterText>{`총 가격: ${totalPrice.toLocaleString(
          "ko-KR"
        )}원`}</FooterText>
        <FooterButton onClick={handleClick} disabled={isButtonDisabled}>
          {buttonText}
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
  @media (max-width: 500px) {
    width: 100vw;
  }
`;

const FooterContent = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 500px) {
    width: 80vw;
  }
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
