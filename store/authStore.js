import { create } from "zustand";
import instance from "@/lib/axios";

// 1. axios로 로그인 요청 처리
// 2. local storage로 새로고침 유지
// 3. 새로 고침시 local storage로 get 요청해서 로그인 상태 유지

export const useAuthStore = create((set) => ({
  token: null,
  isLogin: false,

  login: async (email, password) => {
    const res = await instance.post("/auth/sign-in", { email, password });
    const { accessToken } = res.data;

    instance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    set({ token: accessToken, isLogin: true });

    localStorage.setItem("token");

    return true;
  },

  logout: () => {
    set({ token: null, isLogin: false });
    localStorage.removeItem("token", accessToken);
    delete instance.defaults.headers.common["Authorization"];
  },

  restore: () => {
    const restored = localStorage.getItem("token");
    if (!restored) return;

    instance.defaults.headers.common["Authorization"] = `Bearer ${restored}`;

    set({ token: restored, isLogin: true });
  },
}));
