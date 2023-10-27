import { useTranslation } from "next-i18next";
import styles from "./Expertise.module.scss";
import { Point } from "@entities/Point/Point";

export const Expertise = () => {
  const { t } = useTranslation();
  const CONFIG = [
    {
      count: "3+",
      text: `training.about.items.0`,
    },
    {
      count: "50+",
      text: `training.about.items.1`,
    },
    {
      count: "20+",
      text: `training.about.items.2`,
    },
    {
      count: "100+",
      text: `training.about.items.3`,
    },
  ];
  return (
    <div className={styles.wrapper}>
      {CONFIG.map((el, index) => {
        return (
          <div key={`Expertise-element-${index}`} className={styles.element}>
            <Point text={el.count} />
            <p className={styles.text}>{t(el.text)}</p>
          </div>
        );
      })}
    </div>
  );
};
