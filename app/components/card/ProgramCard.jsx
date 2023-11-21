import { MoveRight } from "lucide-react";

const ProgramCard = ({ date, event }) => {
  return (
    <div className="p-6 bg-[#454545] rounded-xl cursor-pointer relative overflow-hidden">
      <h3 className="text-white font-[600] pb-4">{date}</h3>
      <div className="flex justify-between items-center text-white font-[500] mb-4">
        <p className="">Количество событие:</p>
        <span>{event}</span>
      </div>
      <hr className="bg-[#8E8E8E] h-[1px]" />
      <div className="flex justify-between items-center mt-4">
        <p className="text-yellow leading-6 font-[500] cursor-pointer">
          Показать события
        </p>
        <MoveRight className="text-yellow cursor-pointer" />
      </div>
      <div className="absolute inset-0 border border-transparent hover:border-yellow transition-all duration-700 ease-in-out"></div>
    </div>
  );
};

export default ProgramCard;
