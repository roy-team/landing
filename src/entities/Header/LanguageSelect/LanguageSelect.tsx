import { type MouseEvent } from "react";
import styles from "./LanguageSelect.module.scss";
import { useTranslation } from "next-i18next";
import { Language } from "@shared/constants/language";
import { useRouter } from "next/router";
import { LANGUAGES } from "@entities/constants/language";
import classNames from "classnames";

type Props = {
  close: () => void;
};

export const LanguageSelect = ({ close }: Props) => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const handleChangeLanguage = (e: MouseEvent, lang: Language) => {
    e.stopPropagation();
    close();
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <div className={styles.selectList}>
      {LANGUAGES.map((language, idx) => (
        <div
          key={idx}
          onClick={(e) => handleChangeLanguage(e, language.code)}
          className={classNames(styles.selectItem, {
            [styles.active]: i18n.language === language.code,
          })}
        >
          {language.name}
        </div>
      ))}
    </div>
  );
};
