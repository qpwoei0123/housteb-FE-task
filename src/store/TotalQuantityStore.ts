import create from "zustand";

type TotalQuantityProps = {
  totalQuantity: number;
  addTotalQuantity: () => void;
  subtractTotalQuantity: () => void;
  resetTotalQuantity: () => void;
};

const useTotalQuantityStore = create<TotalQuantityProps>((set) => ({
  totalQuantity: 0,
  addTotalQuantity: () =>
    set((state) => ({ totalQuantity: state.totalQuantity + 1 })),
  subtractTotalQuantity: () =>
    set((state) => ({ totalQuantity: state.totalQuantity - 1 })),
  resetTotalQuantity: () => set({ totalQuantity: 0 }),
}));

export default useTotalQuantityStore;
