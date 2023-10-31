import { useMenuActions } from "features/Buttons/burgerButton";
import styles from "./BurgerLanguage.module.scss";
import { LanguageSelect } from "@entities/Header/LanguageSelect/LanguageSelect";
import { useTranslation } from "next-i18next";
import { useRef } from "react";

export const BurgerLanguage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen } = useMenuActions(ref);
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper} onClick={setIsOpen} ref={ref}>
      <p className={styles.text}>{t("header.language")}:</p>
      {isOpen && (
        <div className={styles.menu}>
          <LanguageSelect close={setIsOpen} />
        </div>
      )}
    </div>
  );
};
