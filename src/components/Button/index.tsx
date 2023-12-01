import Link, { type LinkProps } from 'next/link';

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

interface LinkButtonProps extends LinkProps {
  buttonProps: ButtonProps;
  newTab?: boolean;
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

export const LinkButton = ({
  href,
  newTab = false,
  prefetch = true,
  className,
  buttonProps,
}: LinkButtonProps) => {
  return (
    <Link
      role="button"
      className={className}
      href={href}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : ''}
      prefetch={prefetch}>
      <Button {...buttonProps}>{buttonProps.children}</Button>
    </Link>
  );
};
