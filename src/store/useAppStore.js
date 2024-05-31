import { create } from "zustand";

const useAppStore = create((set) => ({
  // data login
  isLogin: false,
  setIsLogin: (value) => set({ isLogin: value }),

  // data jumlah peserta
  jumlahSmp: 20,
  jumlahSma: 20,

  // data user
  role: JSON.parse(localStorage.getItem("juri"))?.role || "p",
  setRole: (value) => set({ role: value }),
}));

export default useAppStore;
