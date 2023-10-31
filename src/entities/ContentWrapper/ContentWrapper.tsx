import classNames from "classnames";
import styles from "./ContentWrapper.module.scss";
import { type BlockName } from "@entities/constants/navigation";

type Props = {
  children: Array<JSX.Element>;
  id?: BlockName;
  className?: string;
};

export const ContentWrapper = ({ children, id, className }: Props) => {
  return (
    <div className={classNames(className, styles.wrapper)} id={id}>
      {children}
    </div>
  );
};
