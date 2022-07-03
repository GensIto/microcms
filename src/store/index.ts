// https://github.com/pmndrs/zustand
import create from "zustand";

type State = {
  count: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

const useStore = create<State>((set) => ({
  count: 0,
  increasePopulation: () => set((state) => ({ count: state.count + 1 })),
  removeAllBears: () => set({ count: 0 }),
}));
