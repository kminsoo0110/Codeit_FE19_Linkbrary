import clsx from "clsx";

// CheckList
// 1. Button 클릭했을때 동작 수행하는 함수 추가 handleClick

function Button({ children, rounded = "full", ...props }) {
  return (
    <button
      {...props}
      className={clsx(
        "flex justify-center font-semibold text-base px-24 py-12 cursor-pointer",
        "text-white bg-linear-to-r from-point to-gradient",
        `rounded-${rounded}`
      )}
    >
      {children}
    </button>
  );
}

export default Button;
