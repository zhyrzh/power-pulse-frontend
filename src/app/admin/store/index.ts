import { create } from "zustand";

type TSidebarStore = {
  isSidebarShown: boolean;
  setIsSidebarShown: (isShown: boolean) => void;
};

export const useSidebarStore = create<TSidebarStore>((set) => ({
  isSidebarShown: false,
  setIsSidebarShown: (isShown: boolean) =>
    set(() => ({ isSidebarShown: isShown })),
}));
