import styles from "./MenuWrapper.module.scss";

type Props = {
  children: JSX.Element;
};

export const MenuWrapper = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};
