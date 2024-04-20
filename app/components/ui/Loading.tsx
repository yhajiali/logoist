import React from "react";

type Props = {
  message: string;
};

const Loading = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
      <div className="size-32 rounded-full border-2 border-r-blue-400 animate-spin"></div>
      <span className="text-blue-400">{props.message}</span>
    </div>
  );
};

export default Loading;
