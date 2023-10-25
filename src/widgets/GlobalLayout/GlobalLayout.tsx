import styles from "./GlobalLayout.module.scss";

type Props = {
  children: JSX.Element;
};

export const GlobalLayout = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};
