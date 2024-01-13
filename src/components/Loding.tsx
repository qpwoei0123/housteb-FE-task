import styled from "styled-components";

const Loding = () => {
  return (
    <Container>
      <p>목록을</p>
      <p>불러오고 있습니다.</p>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
  }
`;

export default Loding;
