import "shared/styles/index.scss";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Jost } from "next/font/google";
import { appWithTranslation } from "next-i18next";

const fonts = Jost({ subsets: ["latin", "cyrillic"], weight: ["400", "500"] });

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
      <Component {...pageProps} />
    </main>,
  );
};

export default appWithTranslation(App);
