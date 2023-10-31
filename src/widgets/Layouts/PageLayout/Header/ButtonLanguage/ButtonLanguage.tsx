import { LanguageSelect } from "@entities/Header/LanguageSelect/LanguageSelect";
import styles from "./ButtonLanguage.module.scss";
import { useMenuActions } from "features/Buttons/burgerButton";
import { MenuWrapper } from "@entities/Header/MenuWrapper/MenuWrapper";
import { useTranslation } from "next-i18next";
import { useRef } from "react";

export const ButtonLanguage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen } = useMenuActions(ref);
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper} onClick={setIsOpen} ref={ref}>
      <p>{t("header.language")}</p>
      {isOpen && (
        <div className={styles.menu}>
          <MenuWrapper>
            <LanguageSelect close={setIsOpen} />
          </MenuWrapper>
        </div>
      )}
    </div>
  );
};
