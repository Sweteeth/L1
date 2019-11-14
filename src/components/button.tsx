import * as React from "react";

interface IButtonProps {
  children: string | React.ReactNode;
}

export default function Button({ children }: IButtonProps) {
  return (
    <button className="bg-blue font-body transition-default text-base py-2 px-6 rounded my-5 hover:bg-yellow hover:text-black hover:transition-default">
      {children}
    </button>
  );
}
