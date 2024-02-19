import React from "react";

interface Props {
  type: string;
  name: string;
  value?: string | undefined;
  onChange: Function;
  placeholder: string;
}

const Input: React.FC<Props> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
