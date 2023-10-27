import { useRouter } from "next/router";
import styles from "./NotFound.module.scss";
import { Button } from "@entities/Button/Button";
import { useTranslation } from "next-i18next";

export const NotFound = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <div className={styles.wrapper}>
      <h1>{`404 - ${t("pages.notFound")}`}</h1>
      <Button
        onClick={() => {
          router.back();
        }}
      >
        {t("buttons.back")}
      </Button>
    </div>
  );
};
