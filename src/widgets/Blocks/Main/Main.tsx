import { Button } from "@shared/ui/Button/Button";
import styles from "./Main.module.scss";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export const MainBlock = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper} id="main">
      <div className={styles.textBlock}>
        <p className={styles.text}>
          <strong className={styles.bold}>Comdev group </strong>
          {t("main.info")}
        </p>
        <Button className={styles.button}>{t("main.contact")}</Button>
      </div>
      <Image
        width={660}
        height={660}
        src={"/images/image2282.jpg"}
        alt="main image"
        className={styles.image}
      />
    </div>
  );
};
