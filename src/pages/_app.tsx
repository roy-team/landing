import "shared/styles/index.scss";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Jost } from "next/font/google";
import { appWithTranslation } from "next-i18next";
import { StyledAppLayout } from "widgets/Layouts/StyledAppLayout/StyledAppLayout";

const fonts = Jost({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppWithLayoutProps = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppWithLayoutProps) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <main className={fonts.className}>
      <StyledAppLayout>
        <Component {...pageProps} />
      </StyledAppLayout>
    </main>,
  );
};

export default appWithTranslation(App);
