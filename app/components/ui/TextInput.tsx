import React from "react";

type Props = {
  label: string;
  placeholder: string;
  name: string;
  textarea?: boolean;
  setInputValue?: (value: string) => void;
};

const TextInput = ({
  label,
  name,
  placeholder,
  textarea,
  setInputValue,
}: Props) => {
  return (
    <div className="w-full flex flex-col gap-2 animate-fadeUp">
      <label htmlFor={name}>{label}</label>
      {!textarea ? (
        <input
          type="text"
          className="outline-none bg-transparent border-x-0 border-t-0 border-2 dark:border-gray-700 w-full py-2 focus:border-blue-400 transition-all duration-300"
          id={name}
          placeholder={placeholder}
          onChange={(e) => setInputValue && setInputValue(e.target.value)}
          required
        />
      ) : (
        <textarea
          className="outline-none bg-transparent border-x-0 border-t-0 border-2 dark:border-gray-700 w-full py-2 focus:border-blue-400 transition-all duration-300"
          id={name}
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
};

export default TextInput;
