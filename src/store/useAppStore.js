import { create } from "zustand";

const useAppStore = create((set) => ({
  // data login
  isLogin: false,
  setIsLogin: (value) => set({ isLogin: value }),

  // data jumlah peserta
  jumlahSmp: 20,
  jumlahSma: 20,
}));

export default useAppStore;
