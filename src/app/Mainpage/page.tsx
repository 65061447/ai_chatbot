'use client';
import { Link } from "react-router-dom";
import { useRouter } from 'next/navigation';




export default function Mainpage() {  

  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };


    return <main className='min-h-screen w-screen flex'>
        <div className='w-[20vw] bg-sky-950'>
        <p className="h-[50vw] pt-15 text-white flex justify-center font-sans font-extrabold text-4xl ">PNDC</p>
        </div>
        <div>
            
        </div>
        <div className='w-[80vw] flex justify-center items-end pb-[8%]'>
            <div className="w-[75%] h-[6%]">
                <div className="w-full h-full rounded-3xl bg-white flex items-center border-1">
                    <input placeholder="ถามมา" className="w-full h-full rounded-3xl px-5"></input>
                    <button className="bg-blue" onClick={handleClick}>
                        Send
                </button>
                </div>
            </div>
        </div>
    </main>
}


