import Intro from '../components/intro';
export default function Home() {
  return (
      <div className="flex min-h-screen w-full flex-col items-center justify-between px-12 sm:items-start backdrop-blur-[0.01em]"> 
        <Intro></Intro>
      </div>
  );
}
