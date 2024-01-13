import styled from "styled-components";
import EventChecker from "./EventChecker";

const ItemBox = () => {
  return (
    <Container>
      <ItemImg />
      <ItemContentsDiv>
        <FlexBox>
          <span>name</span>
          <EventChecker />
        </FlexBox>
        <BetweenBox>
          <span>- 1 +</span>
          <span>price</span>
        </BetweenBox>
      </ItemContentsDiv>
    </Container>
  );
};

const Container = styled.div`
  width: 250px;
  height: 65px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-color: white;
  display: flex;
  padding: 10px;
  gap: 15px;
`;

const ItemImg = styled.img`
  width: 65px;
  height: 65px;
  background-color: #d9d9d9;
`;

const ItemContentsDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BetweenBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export default ItemBox;
