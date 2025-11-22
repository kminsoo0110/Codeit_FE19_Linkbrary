"use client";

import clsx from "clsx";
import Image from "next/image";
import Logo from "@/public/icons/logo/logo.svg";
import Kebab from "@/public/icons/kebab.svg";
import Star1 from "@/public/icons/star1.svg";
import Star2 from "@/public/icons/star2.svg";
import { useState } from "react";

// CheckList
// 1. 기본적인 기능 구현하기
// 2. 별표 기능 추가하기
// 3. 본문 글자수 제한하거나, 지정한 크기 이상의 내용이 넘치면 안보이게하기
// 4. API 연동하기
// 5. 이미지가 있을 때 없을 때 구분하기

function Card() {
  const [star, setStar] = useState(false);

  const handleStarClick = () => {
    setStar((prev) => !prev);
  };

  return (
    <div
      className={clsx(
        "flex flex-col cursor-pointer",
        "w-340 h-344 rounded-2xl overflow-hidden",
        "bg-white",
        "font-normal"
      )}
    >
      <div className={clsx("flex h-200 bg-example justify-center")}>
        <Image src={Logo} alt="logo" />
      </div>
      <div className={clsx("flex flex-col gap-10", "px-20 py-15")}>
        <div className={clsx("flex justify-between")}>
          <span className="text-gray-200 text-13">0 minutes ago</span>
          <span className="flex justify-center">
            <Image src={Kebab} alt="kebab" />
          </span>
        </div>
        <div className="text-16">
          Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
          consequat...
        </div>
        <div className="text-14 text-gray-100">2025.11.21</div>
      </div>
    </div>
  );
}

export default Card;
