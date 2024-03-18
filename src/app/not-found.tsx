import LinkButton from '@/components/Button/LinkButton';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="not-found text-[150px] text-[#008b62] font-bold">404</h1>
      <p className="mb-8 text-xl font-semibold">
        Ooops!!! The page you are looking for is not found
      </p>
      <LinkButton href="/">Home</LinkButton>
    </div>
  );
}
