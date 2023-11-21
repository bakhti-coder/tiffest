
import InfoSection from "./components/info";
import MainSection from "./components/main";
import NewsSection from "./components/news";
import MovieSection from "./components/movie";

import "swiper/css";
import LitsaSection from "./components/litsa";

export default function Home() {
  return (
    <main>
      <MainSection />
      <InfoSection />
      <NewsSection />
      <MovieSection />
      <LitsaSection />
    </main>
  );
}
