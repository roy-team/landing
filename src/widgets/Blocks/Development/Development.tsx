import { useTranslation } from "next-i18next";
import styles from "./Development.module.scss";
import { Button } from "@entities/Button/Button";
import Image from "next/image";
import Link from "next/link";
import { mockImages } from "@entities/constants/images";
import { BLOCKS_ID } from "@entities/constants/navigation";
import { ContentWrapper } from "@entities/ContentWrapper/ContentWrapper";

export const DevelopmentBlock = () => {
  const { t } = useTranslation();
  return (
    <ContentWrapper className={styles.wrapper} id={BLOCKS_ID.development}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>{t("development.title")}:</h2>
        <ul className={styles.list}>
          <li className={styles.text}>{t("development.items.0")}</li>
          <li className={styles.text}>
            {t("development.items.1")}
            <br />
            {"(DAO, SSI, AI, blockchain)"}
          </li>
          <li className={styles.text}>{t("development.items.2")}</li>
          <li className={styles.text}>{t("development.items.3")}</li>
        </ul>
        <Link href={"/form"}>
          <Button className={styles.button}>{t("development.order")}</Button>
        </Link>
      </div>
      <Image
        width={460}
        height={460}
        src={mockImages.development}
        alt="main image"
        className={styles.image}
      />
    </ContentWrapper>
  );
};
