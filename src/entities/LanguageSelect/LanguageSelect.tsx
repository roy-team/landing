import { MouseEvent, useState } from "react";
import styles from "./LanguageSelect.module.scss";
import { useTranslation } from "next-i18next";
import { Language } from "@shared/constants/language";
import { useRouter } from "next/router";
import classNames from "classnames";
import { ArrowBottom } from "@shared/ui/icons/ArrowBottom/ArrowBottom";

const languages: Array<{ code: Language; name: string }> = [
  { code: "ru", name: "Русский" },
  { code: "be", name: "Беларуская" },
  { code: "uk", name: "Українська" },
  { code: "en", name: "English" },
  { code: "lt", name: "Lietuvių" },
  { code: "pl", name: "Polski" },
];

export const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const selectedLang = languages.find((lang) => lang.code === i18n?.language);
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeLanguage = (e: MouseEvent, lang: Language) => {
    e.stopPropagation();
    setIsOpen(false);
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  const handleOpenMenu = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.selectWrapper}>
      <div className={styles.selectButton} onClick={(e) => handleOpenMenu(e)}>
        <ArrowBottom
          className={styles.arrowIcon}
          style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
        />
        <span className={classNames(styles.title)}> {selectedLang?.name} </span>
      </div>
      {isOpen && (
        <div className={styles.selectList}>
          {languages.map(
            (language, idx) =>
              i18n.language !== language.code && (
                <div
                  key={idx}
                  onClick={(e) => handleChangeLanguage(e, language.code)}
                  className={styles.selectItem}
                >
                  {language.name}
                </div>
              ),
          )}
        </div>
      )}
    </div>
  );
};
