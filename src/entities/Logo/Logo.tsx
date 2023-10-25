import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.comdev}>comdev</div>
      <div className={styles.group}>group</div>
    </div>
  );
};
