"use client";

import clsx from "clsx";
import Image from "next/image";
import Close from "@/public/icons/_close.svg";
import Kakao from "@/public/icons/logo/Kakao.svg";
import Facebook from "@/public/icons/logo/Facebook.svg";
import Llink from "@/public/icons/link.svg";
import { useState } from "react";

// CheckList
// 1. 기본 기능 구현하기
// 2. 굳이 버튼이 아니어도 주변 클릭하면 닫히기 (이것도 상태관리 써야할듯)
// 3. 사용자 집중에 이끌게 중앙으로 배치하고 주변 배경을 검투명하게 만들기
// 4. 상태관리를 통해 버튼을 누르면 해당 상태와 handleClick함수를 전달하기
// 5. 상황에 따른 모달 파일들을 하나의 파일로 옮기기
// 6. 각 기능에 맞는(카카오톡, 페이스북, 링크복사) 복사 기능 넣어주기

function ShareModal() {
  const [fileName, setFileName] = useState("폴더명");

  return (
    <div
      className={clsx(
        "flex flex-col gap-24 w-360 h-209",
        "bg-white px-40 py-32 rounded-2xl",
        "relative"
      )}
    >
      <div className="absolute cursor-pointer w-24 h-24 top-15 right-15">
        <Image src={Close} alt="close" />
      </div>
      <div className="flex flex-col gap-8 text-center">
        <div className="font-bold text-xl">폴더 공유</div>
        <div className="font-regular text-sm text-gray-200">{fileName}</div>
      </div>
      <div className="flex gap-32 justify-center">
        <div className="flex flex-col gap-10">
          <div className="rounded-4xl bg-kakao p-12 cursor-pointer">
            <Image src={Kakao} alt="kakao" />
          </div>
          <div className="font-regular text-xs">카카오톡</div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="rounded-4xl bg-facebook p-12 cursor-pointer">
            <Image src={Facebook} alt="facebook" />
          </div>
          <div className="font-regular text-xs">페이스북</div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="rounded-4xl bg-gray-500 p-12 cursor-pointer">
            <Image src={Llink} alt="linkbrary" />
          </div>
          <div className="font-regular text-xs">링크복사</div>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
