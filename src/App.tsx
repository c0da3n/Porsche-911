import Header from "./components/Header";
import Background from "./assets/Background.png";
import { useTranslation } from "react-i18next";
import CarInfo from "./components/CarInfo";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className="relative h-[calc(100vh-80px)] max-w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="flex flex-col space-y-3 ml-10 max-md:ml-5 mt-40 max-md:mt-28 ">
          <h1 className="hero-title">{t("title")}</h1>
          <h3 className="subtitle">{t("subtitle")}</h3>
        </div>

        <button className="absolute bottom-10 left-1/2 -translate-x-1/2 border-white border-2 px-10 py-2.5 flex items-center justify-center ">
          <p className="text-white font-medium  text-base">Read More</p>
        </button>
      </main>
      <div className="CarInfo">
        <CarInfo />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default App;
