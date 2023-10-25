import { Logo } from "@entities/Logo/Logo";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
    </div>
  );
};
