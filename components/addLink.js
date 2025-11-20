import clsx from "clsx";
import Button from "./button";
import Image from "next/image";
import Chain from "@/public/icons/link.svg";

// CheckList
// 1. Button 클릭했을때 동작 수행하기

function AddLink() {
  return (
    <div
      className={clsx(
        "flex w-800 align-center gap-12 bg-white px-20 py-16",
        "border border-point rounded-2xl"
      )}
    >
      <span className="flex justify-center">
        <Image src={Chain} alt="Chain" className="justify-center" />
      </span>
      <input
        className="flex-1 font-regular text-16 outline-none"
        type="text"
        placeholder="링크를 추가해 보세요"
      />
      <Button rounded="lg">추가하기</Button>
    </div>
  );
}

export default AddLink;
