"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import Image from 'next/image';

export default function Mainpage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askBot = async () => {
    if (!question.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      setAnswer("❌ Error chatbot server is down.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w- h-screen flex">
      <div className="w-[16%] bg-sky-950">
        <p className="h-[50vw] pt-15 text-white flex justify-center font-sans font-extrabold text-4xl ">
          PNDC
        </p>
      </div>
      <div className=" h-full w-[80%]">
        <div className=" h-[70%] flex justify-center items-center w-full">
          <div className="bg-white border w-[80%] border-gray-300 rounded-xl p-6 text-black min-h-[250px] shadow-md ">
            {loading
              ? "⌛ กำลังคิดคำตอบ..."
              : answer || "✈️ คุณอยากไปเที่ยวที่ไหนสามารถพิมพ์ลงด้านล่างได้เลย!!"}
          </div>
        </div>
        <div className="w-[100%] h-[30%] flex justify-center items-center">
          <div className="w-[70%] h-[60px] bg-white flex rounded-full border border-black">
            <input
              placeholder="กรอกข้อความ"
              className="w-full h-full rounded-3xl px-5 focus:outline-none"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") askBot();
              }}
            />
            <button
              className="bg-blue mr-5"
              onClick={askBot}
              disabled={loading}
            >
              <Send />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}