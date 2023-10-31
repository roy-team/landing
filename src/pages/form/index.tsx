import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Language, acceptedLanguages } from "shared/constants/language";
import { useTranslation } from "next-i18next";
import { mockImages } from "@entities/constants/images";
import { PageLayout } from "widgets/Layouts/PageLayout/PageLayout";

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
    <PageLayout
      title={"Comdev group"}
      description={t("seo.decryption")}
      image={mockImages.main}
    >
      <div></div>
    </PageLayout>
  );
};

export default Index;
