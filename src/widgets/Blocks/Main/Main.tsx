import { Button } from "@entities/Button/Button";
import styles from "./Main.module.scss";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { mockImages } from "@entities/constants/images";
import { BLOCKS_ID } from "@entities/constants/navigation";
import { ContentWrapper } from "@entities/ContentWrapper/ContentWrapper";

export const MainBlock = () => {
  const { t } = useTranslation();
  return (
    <ContentWrapper className={styles.wrapper} id={BLOCKS_ID.main}>
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
        src={mockImages.main}
        alt="main image"
        className={styles.image}
      />
    </ContentWrapper>
  );
};
