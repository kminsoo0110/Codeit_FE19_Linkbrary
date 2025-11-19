import clsx from "clsx";

function Button({ children, version = "black" }) {
  return (
    <button
      className={clsx(
        "flex justify-center rounded-full font-semibold text-18 px-24 py-12 cursor-pointer",
        {
          "bg-gray-200 text-white": version === "black",
          "bg-gray-700 text-black": version === "white",
        }
      )}
    >
      {children}
    </button>
  );
}

export default Button;
