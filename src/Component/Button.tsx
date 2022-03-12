import React, { ButtonHTMLAttributes } from "react";

const Button: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    theme: "black" | "green";
  }
> = ({ theme, disabled, className, ...props }) => (
  <button
    className={
      className +
      ` m-2 py-2 px-4 rounded-lg font-medium border-2 border-white text-white
    ${
      theme === "black"
        ? "bg-gray-800 hover:border-black"
        : "bg-green-400 hover:border-green-800"
    }
    ${disabled ? "opacity-80" : "opacity-100"}`
    }
    {...props}
  />
);

export default React.memo(Button);
