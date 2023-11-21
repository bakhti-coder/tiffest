import NewsCard from "../card/NewsCard";
import Line from "../line";

const NewsSection = () => {
  const NewsCardData = [
    {
      image: "/images/news/news1.png",
      name: "Алдияр Байракимов, режиссер нашумевшего казахского фильма «Паралимпиец»:",
      date: "12.04.2023",
    },
    {
      image: "/images/news/news2.png",
      name: "Аяз Салаев, известный киновед, кинорежиссер, сценарист, педагог, телеведущий, актер, заслуженный деятель искусств Республики Азербайджан:",
      date: "12.04.2023",
    },
    {
      image: "/images/news/news3.png",
      name: "Артём Михалков, известный актёр и режиссёр:",
      date: "12.04.2023",
    },
    {
      image: "/images/news/news4.png",
      name: "Гульбара Толомушова, известная актриса театра и кино:",
      date: "12.04.2023",
    },
  ];
  return (
    <>
      <section className="bg-veryDark">
        <div className="container max-w-1600 py-16">
          <h1 className="title text-white font-bold leading-10 text-[40px] my-16">
            Новости
          </h1>
          <div className="grid mx-5 xl:mx-0 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {NewsCardData.map((news, i) => (
              <NewsCard key={i} {...news} />
            ))}
          </div>
        </div>
      </section>
      <Line />
    </>
  );
};

export default NewsSection;
