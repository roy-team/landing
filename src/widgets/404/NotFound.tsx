import { useRouter } from "next/router";
import styles from "./NotFound.module.scss";
import { Button } from "@entities/Button/Button";
import { useTranslation } from "next-i18next";

export const NotFound = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <div className={styles.wrapper}>
      <h1>{`404 - ${t("notFound.title")}`}</h1>
      <Button
        className={styles.button}
        onClick={() => {
          router.back();
        }}
      >
        {t("notFound.back")}
      </Button>
    </div>
  );
};
