'use client';

import Link, { type LinkProps } from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  paddingX?: string;
  paddingY?: string;
  border?: string;
  onClick?: () => void;
  onDisabled?: () => boolean;
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
  onClick = () => {},
  onDisabled = () => false,
  className,
}: ButtonProps) => {
  const cursor = onDisabled() ? 'cursor-not-allowed' : 'cursor-pointer';
  const disabled = onDisabled() ? 'opacity-50' : 'opacity-100';
  return (
    <button
      onClick={onClick}
      disabled={onDisabled()}
      className={`text-center text-white rounded-[2.5rem] shadow-md ${disabled} ${cursor} ${backgroundColor} ${fontSize} ${fontWeight} ${paddingX} ${paddingY} ${border} ${className}`}>
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
