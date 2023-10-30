import { LogoComDev } from "@shared/ui/icons/Logo/Logo";
import styles from "./Header.module.scss";
import { LanguageSelect } from "@entities/LanguageSelect/LanguageSelect";
import { NavBar } from "./NavBar/NavBar";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <LogoComDev className={styles.logo} />
      <div className={styles.content}>
        <NavBar />
        <LanguageSelect />
      </div>
    </div>
  );
};
