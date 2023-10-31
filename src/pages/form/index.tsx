import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Language, acceptedLanguages } from "shared/constants/language";
import { useTranslation } from "next-i18next";
import { mockImages } from "@entities/constants/images";
import { PageLayout } from "widgets/Layouts/PageLayout/PageLayout";
import { FormWidget } from "widgets/Blocks/FormWidget/FormWidget";

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
  const { t } = useTranslation();

  return (
    <PageLayout
      title={"Comdev group"}
      description={t("seo.decryption")}
      image={mockImages.main}
    >
      <FormWidget />
    </PageLayout>
  );
};

export default Index;
