import { useTranslation } from "react-i18next";
import rightArrow from "../assets/rightArrow.svg";

const CarInfo = () => {
  const { t } = useTranslation();

  const infoTitles = t("carInfo.InfoData.InfoTitle", {
    returnObjects: true,
  }) as string[];

  const infoDetails = t("carInfo.InfoData.InfoDetail", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="CarInfo">
      <section className="Intro-Section">
        <h1>{t("carInfo.title")}</h1>
        <p>{t("carInfo.description")}</p>
      </section>
      <section className="Info-Section">
        {infoTitles.map((label, index) => (
          <div key={label}>
            <h4>{label}</h4>
            <p>{infoDetails[index]}</p>
          </div>
        ))}
      </section>
      <button>
        <p>{t("carInfo.more")}</p>
        <img src={rightArrow} alt="arrow-right" />
      </button>
    </div>
  );
};

export default CarInfo;
