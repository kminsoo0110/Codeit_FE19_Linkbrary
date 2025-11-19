"use client";

import clsx from "clsx";
import { useState } from "react";

function Input({ color = "black", type = "text", size }) {
  const [exam, setExam] = useState();

  return (
    <div
      className={clsx(
        "flex gap-8 w-350 px-14 py-16 rounded-lg",
        {
          "bg-gray-200 text-white": color === "black",
          "bg-gray-700 text-black": color === "white",
        },
        "focus-within:* focus-within:border focus-within:border-system"
      )}
    >
      <input
        type={type}
        className="flex-1 outline-none bg-transparent"
        placeholder="내용 입력"
      />
      <span className="cursor-pointer bg-gold-999">A</span>
    </div>
  );
}

export default Input;
