import clsx from "clsx";
import Image from "next/image";
import Landing1 from "@/public/images/landing_1.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="flex flex-col items-center">
        <div
          className={clsx(
            "bg-gray-500 w-full pt-70",
            "flex flex-col justify-center gap-40"
          )}
        >
          <div className="font-bold text-6xl text-center leading-80">
            <span className="bg-linear-to-r from-point to-pink-300 bg-clip-text text-transparent">
              세상의 모든 정보
            </span>
            를<br></br>쉽게 저장하고 관리해 보세요
          </div>
          <div className="text-center">
            <button
              className={clsx(
                "font-semibold text-base px-24 py-12 w-350 cursor-pointer",
                "text-white bg-linear-to-r from-point to-gradient",
                "rounded-lg"
              )}
            >
              링크 추가하기
            </button>
          </div>
          <div className="flex justify-center pt-50">
            <Image src={Landing1} alt="landing1" />
          </div>
        </div>
      </div>
    </div>
  );
}
