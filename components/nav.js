import Link from "next/link";
import Image from "next/image";
import Button from "./button";
import Logo from "@/public/icons/logo/logo2.svg";
import Profile from "@/public/icons/profile.svg";
import { useAuthStore } from "@/store/authStore";

// CheckList
// 1. 데이터를 중복으로 받지 않기. (상위 페이지에서 받도록 or props나 zustand로 관리)
// 2. 로그아웃 전용 UI 따로 만들기

function Nav({ isLogin = false }) {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="bg-gray-500">
      <div className="flex items-center justify-between max-w-1520 mx-auto py-20">
        <div className="cursor-pointer">
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
        </div>
        <div>
          {isLogin ? (
            <div className="flex items-center gap-24">
              <button className="px-10 py-10 border border-point rounded-sm font-regular text-base">
                즐겨찾기
              </button>
              <div className="flex items-center gap-6">
                <div
                  className="rounded-4xl bg-point p-12 cursor-pointer"
                  onClick={logout}
                >
                  <Image src={Profile} height={10} width={10} alt="profile" />
                </div>
                <div>Codeit@codeit.com</div>
              </div>
            </div>
          ) : (
            <Button rounded="lg">
              <Link href="/login">로그인</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
