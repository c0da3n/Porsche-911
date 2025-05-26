import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import ScrollToTop from "./components/ScrollToTop";
import CarInfo from "./components/CarInfo";
import CarImage from "./components/CarImage";
import MobileCarInfo from "./components/MobileCarInfo";

const App = () => {
  const { t } = useTranslation();

  const readScrollDown = () => {
    window.scrollTo({
      top:
        document.querySelector(".Info")!.getBoundingClientRect().top +
        window.scrollY,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-screen overflow-y-auto no-scrollbar">
      <Header />
      <main className="background">
        <div className="flex flex-col space-y-3 ml-10 max-md:ml-5 mt-40 max-md:mt-28 ">
          <h1 className="hero-title">{t("title")}</h1>
          <h3 className="subtitle">{t("subtitle")}</h3>
        </div>

        <button
          onClick={readScrollDown}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 border-white border-2 px-10 py-2.5 flex items-center justify-center "
        >
          <p className="text-white font-medium  text-base">Read More</p>
        </button>
      </main>
      <div className="Info">
        <CarInfo />
        <MobileCarInfo />
        <CarImage />
      </div>
      <div className="Sub">
        <div className="Sub-Title">
          <h1>Overwhelm Many.</h1>
          <h4>While making others celebrate.</h4>
        </div>
        <div className="Sub-Subtitle">
          <p>
            The 911 Turbo models feature incredible performance
            <br />
            combined with breath taking driving dynamics.
          </p>
          <p>
            Even though the basic engine layout has not changed,
            <br /> every detail has been optimized, honed and refined.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default App;
