import React from "react";

type Props = {
  label: string;
  placeholder: string;
  name: string;
  textarea?: boolean;
  onInputChange: (value: string, logoProperty: string) => void;
};

const TextInput = ({
  label,
  name,
  placeholder,
  textarea,
  onInputChange,
}: Props) => {
  return (
    <div className="w-full flex flex-col gap-2 animate-fadeUp">
      <label htmlFor={name}>{label}</label>
      {!textarea ? (
        <input
          type="text"
          className="outline-none bg-transparent border-x-0 border-t-0 border-2 border-gray-700 w-full py-2 focus:border-blue-400 transition-all duration-300"
          id={name}
          placeholder={placeholder}
          required
          maxLength={20}
          onChange={(e) => onInputChange(e.target.value, "name")}
        />
      ) : (
        <textarea
          className="outline-none bg-transparent border-x-0 border-t-0 border-2 border-gray-700 w-full py-2 focus:border-blue-400 transition-all duration-300"
          id={name}
          placeholder={placeholder}
          required
          rows={3}
          maxLength={150}
          onChange={(e) => onInputChange(e.target.value, "description")}
        />
      )}
    </div>
  );
};

export default TextInput;
