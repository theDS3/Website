interface HeroProps {
  children: React.ReactNode;
  className?: string;
}
export default function Hero({ children, className }: HeroProps) {
  return (
    <section
      id="intro"
      className={`grid grid-cols-[1fr] gap-1 min-[620px]:grid-cols-[1fr_2fr] min-[620px]:gap-10 ${className}`}>
      {children}
    </section>
  );
}
