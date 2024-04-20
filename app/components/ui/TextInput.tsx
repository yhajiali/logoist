import React from "react";

type Props = {
  label: string;
  placeholder: string;
};

const TextInput = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor="logo-name">{props.label}</label>
      <input
        type="text"
        className="outline-none bg-transparent border-x-0 border-t-0 border-2 border-gray-600 w-full py-2 focus:border-blue-400 transition-all duration-300"
        id="logo-name"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextInput;
