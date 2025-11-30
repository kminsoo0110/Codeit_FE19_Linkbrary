"use client";

import clsx from "clsx";
import instance from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/authStore";
import AddLink from "@/components/addLink";

// Checklist
// 1. 기본 기능 구현하기.
// 폴더 리스트 개수가 많을 때, overflow 처리하기.

// Folder button style
const BUTTONSTYLE = clsx(
  "px-12 py-8 cursor-pointer",
  "border border-point rounded-md",
  "hover:bg-point",
  "font-regular text-base hover:text-white"
);

function Linkpage() {
  const router = useRouter();
  const isLogin = useAuthStore((state) => state.isLogin);

  const [url, setUrl] = useState("");
  const [folders, setFolders] = useState([]);

  // 사용자가 만든 폴더 리스트를 불러옵니다.
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await instance.get("/folders");
        const data = res.data;

        setFolders(data);
      } catch (err) {
        console.error(`File loading Error: ${err.message}`);
      }
    };

    fetchFiles();
  }, []);

  // 링크페이지에서 로그아웃을 시도할 때 메인페이지로 이동합니다.
  useEffect(() => {
    if (!isLogin) {
      router.push("/");
    }
  }, [isLogin, router]);

  return (
    <div className="min-h-screen">
      <div className={clsx("flex justify-center bg-gray-500", "pt-60 pb-90")}>
        <AddLink value={url} onChange={(e) => setUrl(e.target.value)} />
      </div>
      <div
        className={clsx(
          "flex flex-col w-1440 items-left gap-40",
          "py-40 mx-auto"
        )}
      >
        <div className="flex gap-8">
          <button className={BUTTONSTYLE}>전체</button>
          {folders.map((folder) => {
            return (
              <button key={folder.id} className={BUTTONSTYLE}>
                {folder.name}
              </button>
            );
          })}
          <button className={BUTTONSTYLE}>즐겨찾기</button>
        </div>
        <div className="font-semibold text-2xl">유용한 글</div>
        <div></div>
      </div>
    </div>
  );
}

export default Linkpage;
