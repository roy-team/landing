import { LogoComDev } from "@shared/ui/icons/Logo/Logo";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <LogoComDev className={styles.logo} />
    </div>
  );
};
