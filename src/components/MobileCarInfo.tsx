import { useTranslation } from "react-i18next";

const MobileCarInfo = () => {
  const { t } = useTranslation();

  const infoTitles = t("carInfo.InfoData.InfoTitle", {
    returnObjects: true,
  }) as string[];

  const infoDetails = t("carInfo.InfoData.InfoDetail", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="MobileCarInfo">
      <div>
        <h1>{t("carInfo.title")}</h1>
        <p>{t("carInfo.description")}</p>
        <span>
          {infoTitles.map((label, index) => (
            <div key={label}>
              <h6>{label}</h6>
              <p>{infoDetails[index]}</p>
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};

export default MobileCarInfo;
