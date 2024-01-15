import styled from "styled-components";
import CheckFilled from "../assets/CheckFilled.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CompletePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/order");
    }, 3000);
  }, []);

  return (
    <Container>
      <img src={CheckFilled} />
      <p>주문이 완료되었습니다.</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default CompletePage;
