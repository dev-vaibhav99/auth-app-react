import React from "react";

interface Props {
  name: string;
  type: "submit" | "reset" | "button" | undefined;
}
const Button: React.FC<Props> = ({ name, type }) => {
  return (
    <button type={type} className="bg-blue-500 text-white rounded-md px-2 py-1">
      {name}
    </button>
  );
};

export default Button;
