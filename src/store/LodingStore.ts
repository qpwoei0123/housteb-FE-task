import { create } from "zustand";

type LodingStoreProps = {
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const useLoadingStore = create<LodingStoreProps>((set) => ({
  loading: false,
  setLoading: (value: boolean) => set({ loading: value }),
}));

export default useLoadingStore;
