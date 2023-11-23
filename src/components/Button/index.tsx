import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`bg-transparent cursor-pointer text-white text-2xl font-bold text-center px-10 py-[5px] rounded-[2.5rem] border-2 border-solid border-[white] shadow-md ${className}`}>
      {children}
    </button>
  );
}
