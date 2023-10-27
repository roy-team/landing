import styles from "./Point.module.scss";

type Props = {
  text: string;
  size?: number;
};

export const Point = ({ text, size = 60 }: Props) => {
  const symbolsCount = text.length;
  const fontSize =
    (size * 7) / 12 - ((10 * (symbolsCount - 2)) / symbolsCount) * 3;
  const lineHeight =
    (size * 5) / 6 - ((15 * (symbolsCount - 2)) / symbolsCount) * 2;
  return (
    <div
      className={styles.wrapper}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}px`,
      }}
    >
      {text}
    </div>
  );
};
