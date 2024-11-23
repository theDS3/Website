import Link, { type LinkProps } from 'next/link';

import { ButtonProps, defaultButtonStyles } from '..';

interface LinkButtonProps extends ButtonProps, LinkProps {
  newTab?: boolean;
}

const LinkButton = ({
  children,
  href,
  newTab = false,
  prefetch = true,
  backgroundColor = defaultButtonStyles.backgroundColor,
  fontSize = defaultButtonStyles.fontSize,
  fontWeight = defaultButtonStyles.fontWeight,
  paddingX = defaultButtonStyles.paddingX,
  paddingY = defaultButtonStyles.paddingY,
  border = defaultButtonStyles.border,
  className = '',
}: LinkButtonProps) => {
  return (
    <Link
      role="button"
      className={`cursor-pointer text-center text-white rounded-[2.5rem] shadow-md transition-all duration-300
        ${backgroundColor} ${fontSize} ${fontWeight} ${paddingX} ${paddingY} ${border}
        hover:bg-white hover:text-black ${className}`}
      href={href}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener' : undefined}
      prefetch={prefetch}>
      {children}
    </Link>
  );
};

export default LinkButton;
