import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Language, acceptedLanguages } from "@shared/constants/language";
import { NotFound } from "widgets/404/NotFound";
import Head from "next/head";
import { Header } from "widgets/Header/Header";

export async function getStaticProps({ locale }: { locale: Language }) {
  return {
    props: {
      ...(await serverSideTranslations(
        acceptedLanguages.includes(locale) ? locale : "en",
        ["common", "auth"],
      )),
    },
  };
}

export default function Custom404() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("pages.notFound")}</title>
      </Head>
      <Header />
      <NotFound />
    </>
  );
}
