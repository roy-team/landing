import Image from "next/image";
import styles from "./Training.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Button } from "@entities/Button/Button";
import { Expertise } from "./Expertise/Expertise";
import { mockImages } from "@entities/constants/images";
import { BLOCKS_ID } from "@entities/constants/navigation";
import { ContentWrapper } from "@entities/ContentWrapper/ContentWrapper";

export const TrainingBlock = () => {
  const { t } = useTranslation();
  return (
    <ContentWrapper className={styles.wrapper} id={BLOCKS_ID.training}>
      <Image
        width={560}
        height={560}
        src={mockImages.training}
        alt="main image"
        className={styles.image}
      />
      <div className={styles.textBlock}>
        <h2 className={styles.title}>{t("training.about.title")}</h2>
        <Expertise />
        <h2 className={styles.title}>{t("training.services.title")}</h2>
        <ul className={styles.list}>
          <li className={styles.text}>{t("training.services.items.0")}</li>
          <li className={styles.text}>{t("training.services.items.1")}</li>
          <li className={styles.text}>{t("training.services.items.2")}</li>
        </ul>
        <Link href={"https://t.me/communitihub"} target="_blank">
          <Button className={styles.button}>
            {t("training.services.order")}
          </Button>
        </Link>
      </div>
    </ContentWrapper>
  );
};
