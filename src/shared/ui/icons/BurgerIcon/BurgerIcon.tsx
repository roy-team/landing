import { SVGProps, Ref, forwardRef, memo, useState } from "react";

type ExtendedProps = SVGProps<SVGSVGElement> & { isActive?: boolean };

const SvgComponent = (
  /* { isActive, ...props }: ExtendedProps, */
  props: ExtendedProps,
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
      width={22}
      height={14}
      viewBox="0 0 22 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      {...props}
    >
      <rect width={22} height={2} rx={1} fill="black" />
      <rect y={12} width={22} height={2} rx={1} fill="black" />
      <rect x={secondLineX} y={6} width={18} height={2} rx={1} fill="black" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as BurgerIcon };
