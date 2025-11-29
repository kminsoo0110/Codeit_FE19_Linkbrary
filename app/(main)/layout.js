"use client";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";

export default function MainLayout({ children }) {
  const isLogin = useAuthStore((state) => state.isLogin);
  const restore = useAuthStore((state) => state.restore);

  useEffect(() => {
    restore();
  }, [restore]);

  return (
    <>
      <Nav isLogin={isLogin} />
      {children}
      <Footer />
    </>
  );
}
