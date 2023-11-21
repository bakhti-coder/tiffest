import Image from "next/image";
import React from "react";
import Line from "../line";

const MainSection = () => {
  return (
    <>
      <section className="bg-main-image w-full h-full bg-cover pt-20">
        <div className="container max-w-1600 flex justify-between">
          <Image
            src={"/images/Статуэтка.png"}
            width={400}
            height={200}
            alt="img"
          />
          <Image src={"/images/ENG.png"} width={900} height={200} alt="img" />
        </div>
      </section>
      <Line />
    </>
  );
};

export default MainSection;
