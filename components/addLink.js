import clsx from "clsx";
import Button from "./button";
import Image from "next/image";
import Chain from "@/public/icons/link.svg";

function AddLink({ value = "", onChange = () => {}, onClick, ...props }) {
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
        className="flex-1 font-regular text-base outline-none"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="링크를 추가해 보세요"
        {...props}
      />
      <Button rounded="lg" onClick={onClick}>
        추가하기
      </Button>
    </div>
  );
}

export default AddLink;
