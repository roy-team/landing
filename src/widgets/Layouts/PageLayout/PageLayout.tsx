import { SEO } from "@entities/Seo/Seo";
import { mockImages } from "@entities/constants/images";
import { Header } from "./Header/Header";

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
  return (
    <>
      <SEO title={title} description={description} image={image} />
      <Header />
      {children}
    </>
  );
};
