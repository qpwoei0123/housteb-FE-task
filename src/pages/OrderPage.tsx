import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loding";
import ItemBox from "../components/ItemBox";
import { useEffect, useState } from "react";
import { getItems } from "../api/getItems";
import { Item } from "../types/item";
import useLoadingStore from "../store/LodingStore";
import useTotalPriceStore from "../store/TotalPriceStore";
import useTotalQuantityStore from "../store/TotalQuantityStore";

const OrderPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const loding = useLoadingStore((state) => state.loading);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const resetTotalPrice = useTotalPriceStore((state) => state.resetTotalPrice);
  const resetTotalQuantity = useTotalQuantityStore(
    (state) => state.resetTotalQuantity
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getItems();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };
    resetTotalPrice();
    resetTotalQuantity();
    setLoading(true);
    setTimeout(() => fetchData(), 1000);
  }, []);

  return (
    <>
      <Header />
      {loding ? (
        <Loading />
      ) : (
        <Container>
          {items.map((item) => (
            <ItemBox
              key={item.id}
              id={item.id}
              name={item.name}
              event={item.event}
              materialType={item.materialType}
              price={item.price}
            />
          ))}
        </Container>
      )}

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
