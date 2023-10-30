import Image from "next/image";
import styles from "./About.module.scss";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import { mockImages } from "@entities/constants/images";
import { BLOCKS_ID } from "@entities/constants/navigation";

export const AboutBlock = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper} id={BLOCKS_ID.about}>
      <Image
        width={660}
        height={660}
        src={mockImages.about}
        alt="main image"
        className={styles.image}
      />
      <div className={styles.textBlock}>
        <h1 className={styles.title}>
          <span className={classNames(styles.primary, styles.title)}>
            Comdev
          </span>{" "}
          Group
        </h1>
        <h2 className={styles.text}>{t("about.we")}</h2>
        <p className={styles.decryption}>
          <span
            className={classNames(
              styles.primary,
              styles.decryption,
              styles.bold,
            )}
          >
            {t("about.values.title")}
          </span>
          {" — "}
          {t(t("about.values.decryption"))}
        </p>
      </div>
    </div>
  );
};
