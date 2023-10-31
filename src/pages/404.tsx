import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Language, acceptedLanguages } from "@shared/constants/language";
import { NotFound } from "widgets/404/NotFound";
import { PageLayout } from "widgets/Layouts/PageLayout/PageLayout";

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
    <PageLayout
      title={t("pages.notFound")}
      description={t("seo.decryption")}
      /* image={mockImages.main} */
    >
      <NotFound />
    </PageLayout>
  );
}
