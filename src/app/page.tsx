'use client';
import { useRouter } from "next/navigation";


export default function Home() {
    const router = useRouter();
    const handleClick = () => {
      router.push('/Mainpage');
    };
  return (
    <main className='min-h-screen w-screen flex'>
    <div className='w-full my-15 bg-sky-950'>
      <div className="text-white flex justify-center font-sans font-extrabold text-6xl pt-[18.2vw]">
        <img src="../../public/Travel.jpg"/> 
        <label>Welcome To PNDC</label>
      </div>
      <span className="text-white flex justify-center font-sans font-extrabold text-3xl pt-13">
        <button className="border-1 rounded-full px-20 py-5 hover:bg-white hover:text-sky-950 " onClick={handleClick}>Start</button>
      </span>
    </div>
    </main>
  );
}
