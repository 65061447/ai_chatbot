'use client';
import { useState } from 'react';
import { Send } from "lucide-react";

export default function Mainpage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askBot = async () => {
    if (!question.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      setAnswer('❌ Error talking to the chatbot.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


        return <main className='min-h-screen w-screen flex'>
            <div className='w-[15vw] bg-sky-950'>
                
            <p className="h-[50vw] pt-15 text-white flex justify-center font-sans font-extrabold text-4xl ">PNDC</p>
            </div>
            <div className='w-[100vw]'>
        <div className='bg-white border border-gray-300 rounded-xl p-6 text-black min-h-[100px] shadow-md'>
          {loading ? '⌛ กำลังคิดคำตอบ...' : answer || '🤖 พิมพ์คำถามของคุณด้านล่างแล้วกดส่ง'}
        </div>
      </div>
            <div className='w-[80vw] flex justify-center items-end pb-[8%]'>
                <div className="w-[75%] h-[6%]">
                    <div className="w-full h-full rounded-3xl bg-white flex items-center border-1">
                    <input
                placeholder="ถามมา"
                className="w-full h-full rounded-3xl px-5 focus:outline-none"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') askBot();
                }}
              />
                        <button className="bg-blue mr-5" onClick={askBot} disabled={loading}>
                        <Send />
                    </button>
                    </div>
                </div>
            </div>
        </main>
    }


