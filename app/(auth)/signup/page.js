"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button";
import Input from "@/components/input";
import instance from "@/lib/axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/public/icons/logo/logo2.svg";

function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdAgain, setPwdAgain] = useState("");

  const buttonCondition = email && name && pwd && pwdAgain;

  const pwdMatch = pwd === pwdAgain;

  const handleSignupClick = async (e) => {
    e.preventDefault();

    try {
      await instance.post("/auth/sign-up", {
        email,
        password: pwd,
        name,
      });

      alert("가입 성공했습니다.");
      router.push("/login");
    } catch (err) {
      console.error("회원가입 오류");
      alert("가입 실패했습니다, 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col w-400 justify-center gap-30">
        <div className="flex flex-col gap-16 items-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              height={38}
              width={210}
              loading="eager"
            />
          </Link>
          <div className="font-regular text-base">
            이미 회원이신가요?{" "}
            <Link href="/login" className="text-point underline">
              로그인하기
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-24 items-center">
          <div className="flex flex-col gap-12">
            <label htmlFor="email">이메일</label>
            <Input
              placeholder="이메일을 입력하세요"
              width={400}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          <div className="flex flex-col gap-12">
            <label htmlFor="name">이름</label>
            <Input
              placeholder="이름을 입력하세요"
              width={400}
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />
          </div>
          <div className="flex flex-col gap-12">
            <label htmlFor="pwd">비밀번호</label>
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요"
              width={400}
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              id="pwd"
            />
          </div>
          <div className="flex flex-col gap-12">
            <label htmlFor="pwd2">비밀번호 확인</label>
            <Input
              type="password"
              placeholder="다시 한번 비밀번호를 입력하세요"
              width={400}
              value={pwdAgain}
              onChange={(e) => setPwdAgain(e.target.value)}
              id="pwd2"
            />
          </div>
        </div>
        {buttonCondition && pwdMatch && (
          <Button rounded="lg" onClick={handleSignupClick}>
            회원가입
          </Button>
        )}
      </div>
    </div>
  );
}

export default SignupPage;
