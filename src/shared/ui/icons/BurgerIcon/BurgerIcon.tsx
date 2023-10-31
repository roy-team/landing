import { SVGProps, Ref, forwardRef, memo, useState } from "react";

type ExtendedProps = SVGProps<SVGSVGElement> & { close?: boolean };

const SvgComponent = (
  { close, ...props }: ExtendedProps,
  /* props: ExtendedProps, */
  ref: Ref<SVGSVGElement>,
) => {
  const [secondLineX, setSecondLineX] = useState(4);
  const onMouseEnterHandler = () => {
    setSecondLineX(0);
  };
  const onMouseLeaveHandler = () => {
    setSecondLineX(4);
  };

  return (
    <svg
      width={close ? 18 : 22}
      height={close ? 18 : 14}
      viewBox={close ? "0 0 18 18" : "0 0 22 14"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      {...props}
    >
      <rect
        width={22}
        height={2}
        x={close ? 2 : 0}
        y={close ? 0.5 : 0}
        rx={1}
        transform={`rotate(${close ? "45 2 0.5" : 0})`}
        fill="black"
      />
      <rect
        y={close ? 16 : 12}
        width={22}
        height={2}
        x={close ? 0.5 : 1}
        transform={`rotate(${close ? "-45 0.5 16" : 0})`}
        rx={1}
        fill="black"
      />
      <rect
        x={secondLineX}
        y={6}
        width={close ? 0 : 18}
        height={2}
        rx={1}
        fill="black"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as BurgerIcon };
