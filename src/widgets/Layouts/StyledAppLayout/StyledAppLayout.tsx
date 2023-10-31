import styles from "./StyledAppLayout.module.scss";

type Props = {
  children: JSX.Element;
};

export const StyledAppLayout = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};
