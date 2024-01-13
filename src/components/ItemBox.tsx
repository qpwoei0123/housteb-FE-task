import styled from "styled-components";
import EventChecker from "./EventChecker";
import { Item } from "../types/item";
import { useEffect, useState } from "react";
import useTotalPriceStore from "../store/TotalPriceStore";
import useTotalQuantityStore from "../store/TotalQuantityStore";

const ItemBox: React.FC<Item> = ({ name, event, materialType, price }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const addToTotalPrice = useTotalPriceStore((state) => state.addTotalPrice);
  const subtractTotalPrice = useTotalPriceStore(
    (state) => state.subtractTotalPrice
  );
  const addTotalQuantity = useTotalQuantityStore(
    (state) => state.addTotalQuantity
  );
  const subtractTotalQuantity = useTotalQuantityStore(
    (state) => state.subtractTotalQuantity
  );

  const handlePlus = () => {
    if (quantity < 999) {
      setQuantity(quantity + 1);
      addToTotalPrice(price);
      addTotalQuantity();
    }
  };
  const handleMinus = () => {
    if (quantity) {
      setQuantity(quantity - 1);
      subtractTotalPrice(price);
      subtractTotalQuantity();
    }
  };
  useEffect(() => {
    console.log(quantity * price);
  }, [quantity]);
  return (
    <Container hasBackground={quantity > 0}>
      <ItemImg />
      <ItemContentsDiv>
        <FlexBox>
          <span>{name}</span>
          {event ? <EventChecker /> : null}
        </FlexBox>
        <BetweenBox>
          <QuantityBox>
            <button onClick={handleMinus}>-</button>
            <span>{quantity}</span>
            <button onClick={handlePlus}>+</button>
          </QuantityBox>
          <span>{`${price.toLocaleString("ko-KR")}원`}</span>
        </BetweenBox>
      </ItemContentsDiv>
    </Container>
  );
};

const Container = styled.div<{ hasBackground: boolean }>`
  width: 250px;
  height: 65px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-color: ${(props) => (props.hasBackground ? "#f75a2f3c" : "white")};
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
  align-items: center;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const QuantityBox = styled.div`
  button {
    border: none;
    cursor: pointer;
    background: none;
    font-size: 18px;
  }
  span {
    padding: 0 5px;
  }
`;

export default ItemBox;
