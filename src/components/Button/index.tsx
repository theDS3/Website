interface ButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  paddingX?: string;
  paddingY?: string;
  border?: string;
  className?: string;
}

export const Button = ({
  children,
  backgroundColor = 'bg-transparent',
  fontSize = 'text-2xl',
  fontWeight = 'font-bold',
  paddingX = 'px-10',
  paddingY = 'py-[5px]',
  border = 'border-2 border-solid border-[white]',
  className,
}: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer text-center text-white rounded-[2.5rem] shadow-md ${backgroundColor} ${fontSize} ${fontWeight} ${paddingX} ${paddingY} ${border} ${className}`}>
      {children}
    </button>
  );
};
