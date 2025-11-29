import { create } from "zustand";
import instance from "@/lib/axios";

// 1. axios로 로그인 요청 처리
// 2. local storage로 새로고침 유지
// 3. 새로 고침시 local storage로 get 요청해서 로그인 상태 유지

export const useAuthStore = create((set) => ({
  token: null,
  user: null,
  isLogin: false,

  login: async (email, password) => {
    const res = await instance.post("/auth/sign-in", { email, password });
    const { accessToken } = res.data;

    instance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    // key, value 한 쌍으로 토큰 저장.
    localStorage.setItem("token", accessToken);

    // 로그인한 직후 유저 정보 갖고오기.
    const userRes = await instance.get("/users", {
      headers: { "Cache-Control": "no-cache" },
    });

    console.log(userRes.data);

    set({ token: accessToken, user: userRes.data, isLogin: true });

    return true;
  },

  logout: () => {
    set({ token: null, user: null, isLogin: false });
    localStorage.removeItem("token");
    delete instance.defaults.headers.common["Authorization"];
  },

  // 새로 고침해도 로그인 상태 유지.
  restore: async () => {
    const restored = localStorage.getItem("token");
    if (!restored) return;

    instance.defaults.headers.common["Authorization"] = `Bearer ${restored}`;

    try {
      const userRes = await instance.get("/users", {
        headers: { "Cache-Control": "no-cache" },
      });
      set({ token: restored, user: userRes.data, isLogin: true });
    } catch {
      set({ token: null, user: null, isLogin: false });
    }
  },
}));
