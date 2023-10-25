import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Language, acceptedLanguages } from "shared/constants/language";
import { useTranslation } from "next-i18next";
import { SEO } from "@entities/Seo/Seo";
import { Header } from "widgets/Header/Header";
import { MainBlock } from "widgets/Blocks/Main/Main";
import { AboutBlock } from "widgets/Blocks/About/About";
import { DevelopmentBlock } from "widgets/Blocks/Development/Development";
import { TrainingBlock } from "widgets/Blocks/Training/Training";
import { ContactsBlock } from "widgets/Blocks/Contacts/Contacts";
import { Banner } from "widgets/Blocks/Banner/Banner";

export async function getStaticProps({ locale }: { locale: Language }) {
  return {
    props: {
      ...(await serverSideTranslations(
        acceptedLanguages.includes(locale) ? locale : "en",
        ["common"],
      )),
    },
  };
}

export const Index = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <SEO title={"Comdev group"} description={t("seo.decryption")} />
      <Header />
      <MainBlock />
      <AboutBlock />
      <DevelopmentBlock />
      <Banner />
      <TrainingBlock />
      <ContactsBlock />
    </>
  );
};

export default Index;
