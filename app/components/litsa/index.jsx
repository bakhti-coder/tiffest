import React from "react";
import Line from "../line";
import { Download } from "lucide-react";
import ProgramCard from "../card/ProgramCard";

const LitsaSection = () => {
  const Program = [
    {
      date: "28.09.2023",
      event: 2,
    },
    {
      date: "28.09.2023",
      event: 2,
    },
    {
      date: "28.09.2023",
      event: 1,
    },
    {
      date: "28.09.2023",
      event: 2,
    },
    {
      date: "28.09.2023",
      event: 2,
    },
    {
      date: "28.09.2023",
      event: 52,
    },
    {
      date: "28.09.2023",
      event: 2,
    },
    {
      date: "28.09.2023",
      event: 2,
    },
    {
      date: "28.09.2023",
      event: 2,
    },
    {
      date: "28.09.2023",
      event: 2,
    },
  ];

  return (
    <>
      <Line />
      <section className="bg-[#1F1E1C]">
        <div className="container max-w-1600 py-20">
          <div className="flex justify-between items-center">
            <h1 className="title text-white font-bold leading-10 text-[40px] my-16">
              Программа
            </h1>
            <button className="border flex items-center hover:bg-yellow border-yellow rounded-lg p-3 text-lightGray font-[500] leading-6">
              Скачать <Download className="ml-3" width={18} />
            </button>
          </div>
          <div className="grid mx-5 xl:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Program.map((el, i) => (
              <ProgramCard key={i} {...el} />
            ))}
          </div>
        </div>
      </section>
      <Line />
    </>
  );
};

export default LitsaSection;
