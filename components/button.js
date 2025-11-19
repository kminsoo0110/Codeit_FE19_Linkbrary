import clsx from "clsx";

function Button({ children }) {
  return (
    <button className="flex justify-center bg-gray-200 text-white rounded-lg font-semibold text-18 px-24 py-12 cursor-pointer">
      {children}
    </button>
  );
}

export default Button;
