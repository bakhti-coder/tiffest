import Image from "next/image";
import React from "react";

const MovieCard = ({ img }) => {
  return (
    <div className="mt-5 cursor-pointer">
      <Image
        className="border-2 border-black rounded-lg hover:border-yellow transition-transform duration-300 ease-in-out  hover:scale-105"
        src={img}
        width={260}
        height={282}
        alt="name"
      />
    </div>
  );
};

export default MovieCard;
