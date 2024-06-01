import { create } from "zustand";

const useAppStore = create((set) => ({
  // loading
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),

  // data login
  isLogin: false,
  setIsLogin: (value) => set({ isLogin: value }),

  // data jumlah peserta
  jumlahSmp: 20,
  jumlahSma: 20,

  // data user
  role: JSON.parse(localStorage.getItem("juri"))?.role || "p",
  setRole: (value) => set({ role: value }),

  // sidebar
  openSidebar: true,
  setOpenSidebar: (value) => set({ openSidebar: value }),
}));

export default useAppStore;
