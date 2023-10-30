import Image from "next/image";
import styles from "./Contacts.module.scss";
import { mockImages } from "@entities/constants/images";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Button } from "@entities/Button/Button";
import { LinkedinLogo } from "@shared/ui/icons/LinkedinLogo/LinkedinLogo";
import { TelegramLogo } from "@shared/ui/icons/TelegramLogo/TelegramLogo";
import { BLOCKS_ID } from "@entities/constants/navigation";
import { ContentWrapper } from "@entities/ContentWrapper/ContentWrapper";

export const ContactsBlock = () => {
  const { t } = useTranslation();
  return (
    <ContentWrapper className={styles.wrapper} id={BLOCKS_ID.contacts}>
      <div className={styles.content}>
        <h2 className={styles.title}>{t("contacts.title")}</h2>
        <Link
          href={"https://maps.app.goo.gl/bvEYPYbvnMnZnLSu7"}
          className={styles.text}
          target="_blank"
        >
          Vilnius, V. Nagevičiaus g.3
        </Link>
        <div className={styles.social}>
          <Link
            href={"https://www.linkedin.com/company/comdev-group/about/"}
            className={styles.text}
            target="_blank"
          >
            linkedin
            <LinkedinLogo />
          </Link>
          <Link
            href={"https://t.me/communitihub"}
            className={styles.text}
            target="_blank"
          >
            Telegram
            <TelegramLogo />
          </Link>
        </div>
        <Link href={"/form"}>
          <Button className={styles.button}>{t("contacts.request")}</Button>
        </Link>
      </div>
      <Image
        width={560}
        height={700}
        src={mockImages.contacts}
        alt="main image"
        className={styles.image}
      />
    </ContentWrapper>
  );
};
