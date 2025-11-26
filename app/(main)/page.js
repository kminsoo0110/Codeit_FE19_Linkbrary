import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Landing1 from "@/public/images/landing_1.png";
import Landing2 from "@/public/images/landing_2.png";
import Landing3 from "@/public/images/landing_3.png";
import Landing4 from "@/public/images/landing_4.png";
import Landing5 from "@/public/images/landing_5.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="flex flex-col items-center">
        <main
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
            <Link
              href="/login"
              className={clsx(
                "font-semibold text-base px-24 py-12 w-350 cursor-pointer",
                "text-white bg-linear-to-r from-point to-gradient",
                "rounded-lg cursor-pointer inline-block"
              )}
            >
              링크 추가하기
            </Link>
          </div>
          <div className="flex justify-center pt-50">
            <Image src={Landing1} alt="landing1" />
          </div>
        </main>
        <article className="pt-120 pb-50 ">
          <div className="flex items-center gap-157">
            <div className="flex flex-col gap-10">
              <div className="font-bold text-5xl leading-60">
                <span className="bg-linear-to-r from-red-300 to-blue-300 bg-clip-text text-transparent">
                  원하는 링크
                </span>
                를<br></br>저장하세요
              </div>
              <div className="text-medium text-base text-gray-600">
                나중에 읽고 싶은 글, 다시 보고 싶은 영상,<br></br>
                사고 싶은 옷, 기억하고 싶은 모든 것을<br></br>한 공간에
                저장하세요.
              </div>
            </div>
            <div>
              <Image src={Landing2} alt="landing2" width={550} height={450} />
            </div>
          </div>
        </article>
        <article className="py-50">
          <div className="flex items-center gap-157">
            <div>
              <Image src={Landing3} alt="landing3" width={550} height={450} />
            </div>
            <div className="flex flex-col gap-10">
              <div className="font-bold text-5xl leading-60">
                링크를 폴더로<br></br>
                <span className="bg-linear-to-r from-yellow-200 to-blue-300 bg-clip-text text-transparent">
                  관리
                </span>
                하세요
              </div>
              <div className="text-medium text-base text-gray-600">
                나만의 폴더를 무제한으로 만들고<br></br>
                다양하게 활용할 수 있습니다.
              </div>
            </div>
          </div>
        </article>
        <article className="py-50">
          <div className="flex items-center gap-157">
            <div className="flex flex-col gap-10">
              <div className="font-bold text-5xl leading-60">
                저장한 링크를<br></br>
                <span className="bg-linear-to-r from-point to-blue-300 bg-clip-text text-transparent">
                  공유
                </span>
                해 보세요
              </div>
              <div className="text-medium text-base text-gray-600">
                여러 링크를 폴더에 담고 공유할 수 있습니다.<br></br>
                가족, 친구, 동료들에게 쉽고 빠르게 링크를<br></br>
                공유해 보세요.
              </div>
            </div>
            <div>
              <Image src={Landing4} alt="landing4" width={550} height={450} />
            </div>
          </div>
        </article>
        <article className="pt-50 pb-150">
          <div className="flex items-center gap-157">
            <div>
              <Image src={Landing5} alt="landing5" width={550} height={450} />
            </div>
            <div className="flex flex-col gap-10">
              <div className="font-bold text-5xl leading-60">
                저장한 링크를<br></br>
                <span className="bg-linear-to-r from-blue-300 to-pink-400 bg-clip-text text-transparent">
                  검색
                </span>
                해 보세요
              </div>
              <div className="text-medium text-base text-gray-600">
                중요한 정보들을 검색으로 쉽게 찾아보세요.
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
