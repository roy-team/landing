import { LogoComDev } from "@shared/ui/icons/Logo/Logo";
import styles from "./Header.module.scss";
import { NavBar } from "./NavBar/NavBar";
import { ButtonBurger } from "./ButtonBurger/ButtonBurger";
import { ButtonLanguage } from "./ButtonLanguage/ButtonLanguage";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <LogoComDev className={styles.logo} />
      <div className={styles.content}>
        <NavBar direction="row" />
        <ButtonLanguage />
      </div>
      <div className={styles.burger}>
        <ButtonBurger />
      </div>
    </div>
  );
};
