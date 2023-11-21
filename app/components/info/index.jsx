import Image from "next/image";
import React from "react";
import Line from "../line";

const InfoSection = () => {
  return (
    <>
      <section className="bg-black2 bg-info-image">
        <div className="container max-w-1600 py-20">
          <h1 className="text-lightGray text-[40px] my-8 font-bold leading-10">
            TIFFEST-2022
          </h1>
          <h5 className="text-lightGray text-lg font-bold leading-6">
            TIFFEST-2022
          </h5>
          <hr class="h-[1px] mt-1 bg-[#ABABAB]" />
          <div className="flex justify-between items-center">
            <p className="max-w-[700px] text-lightGray font-[600] leading-8 mt-5">
              XIV Ташкентский международный кинофестиваль (далее - Фестиваль)
              проводится в целях сохранения и развития вековых традиций
              национального киноискусства, дальнейшего развития культурно-
              просветительской деятельности в Республике Узбекистан и развития
              культурных связей на международном уровне, воспитания патриотизма,
              укрепления дружбы и братства между народами, расширения масштабов
              творческого сотрудничества различных стран, возрождения
              прославленного Ташкентского международного кинофестиваля, а также
              обеспечения исполнения Указа Президента Республики Узбекистан от 7
              апреля 2021 года № УП-6202 «О мерах по поднятию киноискусства и
              киноиндустрии на качественно новый уровень и дальнейшему
              совершенствованию системы государственной поддержки отрасли».
            </p>
            <div className="mr-10">
              <Image
                src={"/images/logo.svg"}
                width={300}
                height={264}
                alt="img"
              />
            </div>
          </div>
        </div>
      </section>
      <Line />
    </>
  );
};

export default InfoSection;
