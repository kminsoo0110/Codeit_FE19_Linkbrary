"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import Logo from "@/public/icons/logo/logo2.svg";
import Button from "@/components/button";
import Input from "@/components/input";

function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleLoginClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col w-400 justify-center gap-30">
        <div className="flex flex-col gap-16 items-center">
          <Link href="/">
            <Image src={Logo} alt="Logo" height={38} width={210} />
          </Link>
          <div className="font-regular text-base">
            회원이 아니신가요?{" "}
            <Link href="/signup" className="text-point underline">
              회원 가입하기
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-24 items-center">
          <div className="flex flex-col gap-12">
            <label htmlFor="email">이메일</label>
            <Input
              placeholder="이메일을 입력하세요"
              width={400}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-12">
            <label htmlFor="pwd">비밀번호</label>
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요"
              width={400}
              id="pwd"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
        </div>
        <Button rounded="lg">로그인</Button>
      </div>
    </div>
  );
}

export default LoginPage;
