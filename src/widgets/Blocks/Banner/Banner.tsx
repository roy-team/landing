import { RoyTeamLogo } from "@shared/ui/icons/RoyTeam/RoyTeam";
import styles from "./Banner.module.scss";
import { useTranslation } from "next-i18next";
import { Honeycomb } from "@shared/ui/icons/Honeycomb/Honeycomb";
import { Button } from "@entities/Button/Button";
import Link from "next/link";

export const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <RoyTeamLogo className={styles.logo} />
        <div className={styles.textContent}>
          <h2 className={styles.title}>Roy.team</h2>
          <p className={styles.text}>{t("banner.decryption")}</p>
        </div>
      </div>
      <Honeycomb className={styles.honeycomb} />
      <Link className={styles.link} href={"https://roy.team/"} target="_blank">
        <Button variant="light" className={styles.button}>
          {t("banner.move")}
        </Button>
      </Link>
    </div>
  );
};
