import Link from "next/link";
import styles from "./BurgerMenu.module.scss";
import { useTranslation } from "next-i18next";
import { NAV_CONFIG } from "@entities/constants/navigation";
import { BurgerLanguage } from "./BurgerLanguage/BurgerLanguage";
import classNames from "classnames";

type Props = {
  direction?: "row" | "column" | "column-reverse" | "row-reverse";
  activeId: string;
};

export const BurgerMenu = ({ direction = "column", activeId }: Props) => {
  const { t } = useTranslation();
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list} style={{ flexDirection: direction }}>
        {NAV_CONFIG.map((el, index) => {
          return (
            <li key={`nav-item-${index}`} className={styles.item}>
              <Link
                className={classNames(styles.link, {
                  [styles.active]: activeId === el.href,
                })}
                href={`/#${el.href}`}
              >
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
