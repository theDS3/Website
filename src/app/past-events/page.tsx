import LinkButton from '@/components/Button/LinkButton';
import NavBar from '@/components/Navbar';

export default function PastEvents() {
  return (
    <NavBar>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="not-found text-[150px] text-[#008b62] font-bold">404</h1>
        <p className="mb-8 text-xl font-semibold">TEST</p>
        <LinkButton href="/">Home</LinkButton>
      </div>
    </NavBar>
  );
}
