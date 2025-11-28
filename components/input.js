"use client";

// 로그인에 쓰이는 Input Component.

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import EyeOn from "@/public/icons/eye-on.svg";
import EyeOff from "@/public/icons/eye-off.svg";

function Input({
  type = "text",
  placeholder,
  width = 350,
  value = "",
  onChange = () => {},
  ...props
}) {
  const [visible, setVisible] = useState(false);

  function handleVisibleClick() {
    setVisible((prev) => !prev);
  }

  // CheckList
  // 1. 오류 관련 로직은 추가 예정
  // 2. Button 클릭했을때 동작 수행하기

  return (
    <div
      className={clsx(
        "flex gap-8 px-15 py-18 rounded-lg bg-white border border-gray-300",
        "focus-within:* focus-within:border focus-within:border-point"
      )}
      style={{ width }}
    >
      <input
        type={type === "password" ? (visible ? "text" : "password") : type}
        className="flex-1 outline-none bg-transparent font-regular text-base"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {type === "password" && (
        <span
          className="flex justify-center cursor-pointer"
          onClick={handleVisibleClick}
        >
          <Image src={visible ? EyeOff : EyeOn} alt="toggle visibility" />
        </span>
      )}
    </div>
  );
}

export default Input;
