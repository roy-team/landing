import Link from "next/link";
import styles from "./BurgerMenu.module.scss";
import { useTranslation } from "next-i18next";
import { NAV_CONFIG } from "@entities/constants/navigation";
import { BurgerLanguage } from "./BurgerLanguage/BurgerLanguage";

type Props = {
  direction?: "row" | "column" | "column-reverse" | "row-reverse";
};

export const BurgerMenu = ({ direction = "column" }: Props) => {
  const { t } = useTranslation();
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list} style={{ flexDirection: direction }}>
        {NAV_CONFIG.map((el, index) => {
          return (
            <li key={`nav-item-${index}`} className={styles.item}>
              <Link className={styles.link} href={`#${el.href}`}>
                {t(el.title)}
              </Link>
            </li>
          );
        })}
        <BurgerLanguage />
      </ul>
    </nav>
  );
};
