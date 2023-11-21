import MovieCard from "../card/MovieCard";

const MovieSection = () => {
  const Movie = [
    {
      img: "/images/movie/movie1.png",
    },
    {
      img: "/images/movie/movie2.png",
    },
    {
      img: "/images/movie/movie3.png",
    },
    {
      img: "/images/movie/movie4.png",
    },
    {
      img: "/images/movie/movie5.png",
    },
  ];

  return (
    <section className="bg-black">
      <div className="container max-w-1600 py-20">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="title text-white font-bold leading-10 text-[40px] my-16">
              Кино за 5 дней
            </h1>
            <button className="border border-yellow rounded-lg p-3 text-lightGray font-[500] leading-6">
              Оставить заявку
            </button>
          </div>
          <h5 className="text-lightGray text-lg font-bold leading-6">
            Кино за 5 дней
          </h5>
          <hr class="h-[1px] mt-1 bg-[#ABABAB]" />
          <p className=" text-lightGray text-xs font-[600] leading-8 mt-5">
            <span>
              ЭТО ОСНОВНАЯ ПРОГРАММА МОЛОДЁЖНОГО КИНОФЕСТИВАЛЯ, КОТОРАЯ ПРОЙДЁТ
              В РАМКАХ ТАШКЕНТСКОГО МЕЖДУНАРОДНОГО КИНОФЕСТИВАЛЯ «ЖЕМЧУЖИНА
              ШЕЛКОВОГО ПУТИ».
            </span>
            <br />
            <span className="text-yellow">«КИНО НОВОГО ПОКОЛЕНИЯ»</span>
            <br />  
            <span>
              {`«КИНО ЗА 5 ДНЕЙ» - КОНКУРС МОЛОДЫХ КИНЕМАТОГРАФИСТОВ, УЧАСТНИКАМ
            КОТОРОГО ПРЕДСТОИТ СНЯТЬ КОРОТКОМЕТРАЖНЫЕ ФИЛЬМЫ ОБ УЗБЕКИСТАНЕ, НА
            ТЕМУ «ВЕЛИКИЙ ШЕЛКОВЫЙ ПУТЬ» Конкурс проводит Агентство
            Кинематографии Узбекистана, ГУП «Ёшлик киностудияси» при поддержке
            Министерства Туризма и Спорта Республики Узбекистан, Министерства
            Иностранных Дел Республики Узбекистан, Министерства Финансов
            Республики Узбекистан, Всемирное Общество по изучению, сохранению и
            популяризации культурного наследия Узбекистана.`}
            </span>
          </p>
        </div>
        <div className="mt-10">
          <h5 className="text-lightGray text-lg font-bold leading-6">
            Кино за 5 дней
          </h5>
          <hr class="h-[1px] mt-1 bg-[#ABABAB]" />
          <div className="grid mx-5 xl:mx-0 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {Movie.map((el, i) => (
              <MovieCard key={i} {...el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieSection;
