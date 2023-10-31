import Link from "next/link";
import styles from "./NavBar.module.scss";
import { useTranslation } from "next-i18next";
import { NAV_CONFIG } from "@entities/constants/navigation";
import classNames from "classnames";

type Props = {
  direction?: "row" | "column" | "column-reverse" | "row-reverse";
  activeId: string;
};

export const NavBar = ({ direction = "row", activeId }: Props) => {
  const { t } = useTranslation();

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list} style={{ flexDirection: direction }}>
        {NAV_CONFIG.map((el, index) => {
          return (
            <li
              key={`nav-item-${index}`}
              className={classNames(styles.item, {
                [styles.active]: activeId === el.href,
              })}
            >
              <Link className={styles.link} href={`/#${el.href}`}>
                {t(el.title)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
