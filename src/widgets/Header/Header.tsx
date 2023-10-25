import { Logo } from "@shared/ui/icons/Logo/Logo";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Logo className={styles.logo} />
    </div>
  );
};
