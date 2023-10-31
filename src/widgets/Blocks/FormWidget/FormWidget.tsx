import Image from "next/image";
import styles from "./FormWidget.module.scss";
import { useTranslation } from "next-i18next";
import { mockImages } from "@entities/constants/images";
import { BLOCKS_ID } from "@entities/constants/navigation";
import { ContentWrapper } from "@entities/ContentWrapper/ContentWrapper";
import { TextField } from "@entities/TextField/TextField";
import { useFeedback } from "features/Forms/feedback";
import classNames from "classnames";
import { Button } from "@entities/Button/Button";

export const FormWidget = () => {
  const { t } = useTranslation();
  const {
    contacts,
    errors,
    handleSubmit,
    isValid,
    name,
    question,
    setContacts,
    setName,
    setQuestion,
  } = useFeedback();
  return (
    <ContentWrapper className={styles.wrapper} id={BLOCKS_ID.training}>
      <Image
        width={560}
        height={560}
        src={mockImages.form}
        alt="main image"
        className={styles.image}
      />
      <div className={styles.contentBlock}>
        <h2 className={styles.title}>{t("form.title")}</h2>
        <TextField
          value={name}
          onChange={setName}
          placeholder={t("form.name")}
          className={classNames(styles.input, {
            [styles.error]: !!errors.name,
          })}
          error={errors.name}
        />
        <TextField
          value={contacts}
          onChange={setContacts}
          placeholder={t("form.contacts")}
          className={classNames(styles.input, {
            [styles.error]: !!errors.contacts,
          })}
          error={errors.contacts}
        />
        <TextField
          value={question}
          onChange={setQuestion}
          placeholder={t("form.question")}
          className={classNames(styles.input, {
            [styles.error]: !!errors.question,
          })}
          error={errors.question}
        />
        <Button disabled={!isValid} onClick={handleSubmit}>
          {t("form.button")}
        </Button>
      </div>
    </ContentWrapper>
  );
};
