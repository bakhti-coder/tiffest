import { MoveRight } from "lucide-react";
import Image from "next/image";

const NewsCard = ({ image, name, date }) => {
  return (
    <div className="h-full p-0 bg-[#454545] flex flex-col justify-between">
      <div>
        <Image src={image} width={330} height={200} alt="cards" />
        <h3 className="text-lightGray font-[600] leading-6 p-4">{name}</h3>
      </div>
      <div className="p-4">
        <p className=" text-lightGray font-[500] leading-4">{date}</p>
      </div>
      <div className="flex justify-between items-center p-4">
        <p className="text-yellow leading-6 font-[500] cursor-pointer">
          Перейти
        </p>
        <MoveRight className="text-yellow cursor-pointer" />
      </div>
    </div>
  );
};

export default NewsCard;
