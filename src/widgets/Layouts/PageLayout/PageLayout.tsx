import { SEO } from "@entities/Seo/Seo";
import { mockImages } from "@entities/constants/images";
import { Header } from "./Header/Header";
import { useScroll } from "features/Scroll/scroll";
import { useRef } from "react";

type Props = {
  children: JSX.Element | Array<JSX.Element>;
  description: string;
  title?: string;
  image?: string;
};

export const PageLayout = ({
  children,
  description,
  image = mockImages.main,
  title = "Comdev group",
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { activeId } = useScroll(ref);
  return (
    <div ref={ref}>
      <SEO title={title} description={description} image={image} />
      <Header activeId={activeId} />
      {children}
    </div>
  );
};
