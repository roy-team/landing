import { LogoComDev } from "@shared/ui/icons/Logo/Logo";
import styles from "./Header.module.scss";
import { NavBar } from "./NavBar/NavBar";
import { ButtonBurger } from "./ButtonBurger/ButtonBurger";
import { ButtonLanguage } from "./ButtonLanguage/ButtonLanguage";

type Props = {
  activeId: string;
};

export const Header = ({ activeId }: Props) => {
  return (
    <div className={styles.wrapper}>
      <LogoComDev className={styles.logo} />
      <div className={styles.content}>
        <NavBar activeId={activeId} direction="row" />
        <ButtonLanguage />
      </div>
      <div className={styles.burger}>
        <ButtonBurger activeId={activeId} />
      </div>
    </div>
  );
};
