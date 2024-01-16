import { create } from "zustand";

type TotalPriceProps = {
  totalPrice: number;
  addTotalPrice: (value: number) => void;
  subtractTotalPrice: (value: number) => void;
  resetTotalPrice: () => void;
};

export const useTotalPriceStore = create<TotalPriceProps>((set) => ({
  totalPrice: 0,
  addTotalPrice: (value: number) =>
    set((state) => ({ totalPrice: state.totalPrice + value })),
  subtractTotalPrice: (value: number) =>
    set((state) => ({ totalPrice: state.totalPrice - value })),
  resetTotalPrice: () => set({ totalPrice: 0 }),
}));
