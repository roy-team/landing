import classNames from "classnames";
import styles from "./ContentWrapper.module.scss";

type Props = {
  children: Array<JSX.Element>;
  id: string;
  className?: string;
};

export const ContentWrapper = ({ children, id, className }: Props) => {
  return (
    <div className={classNames(className, styles.wrapper)} id={id}>
      {children}
    </div>
  );
};
