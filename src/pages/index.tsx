import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Language, acceptedLanguages } from "shared/constants/language";
import { useTranslation } from "next-i18next";
import { SEO } from "@entities/Seo/Seo";

export async function getStaticProps({ locale }: { locale: Language }) {
  return {
    props: {
      ...(await serverSideTranslations(
        acceptedLanguages.includes(locale) ? locale : "en",
        ["common", "landing"],
      )),
    },
  };
}

export const Index = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <>
      <SEO title={"ComDev"} description={t("head.description")} />
      <div>{i18n.language}</div>
    </>
  );
};

export default Index;
