import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/order");
    }, 3000);
  }, []);

  return (
    <Container>
      <p>
        주문에 실패하였습니다.
        <br />
        다시 시도해주세요.
      </p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export default ErrorPage;
