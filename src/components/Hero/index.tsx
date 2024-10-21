interface HeroProps {
  children: React.ReactNode;
  className?: string;
}
export default function Hero({ children, className }: HeroProps) {
  return (
    <section
      id="intro"
      className={`grid grid-cols-[1fr] gap-4 sm:grid-cols-[1fr_2fr] sm:gap-10 pt-28 ${className}`}>
      {children}
    </section>
  );
}
