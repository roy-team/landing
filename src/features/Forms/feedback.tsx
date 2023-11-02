import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "next-i18next";
import { ChangeEventHandler } from "react";

type Values = {
  name: string;
  question: string;
  contacts: string;
};

export const useFeedback = () => {
  const { t, i18n } = useTranslation();
  const initialValues: Values = {
    contacts: "",
    name: "",
    question: "",
  };
  const validationSchema = Yup.object().shape({
    contacts: Yup.string()
      .max(256, t("error.max256"))
      .min(8, t("error.min8"))
      .required(t("error.required")),
    name: Yup.string()
      .max(256, t("error.max256"))
      .min(8, t("error.min8"))
      .required(t("error.required")),
    question: Yup.string()
      .max(256, t("error.max256"))
      .min(8, t("error.min8"))
      .required(t("error.required")),
  });
  const {
    handleSubmit,
    setFieldValue,
    errors,
    values,
    isValid,
    validateField,
    setFieldError,
    resetForm,
  } = useFormik({
    validationSchema,
    initialValues,
    validateOnChange: false,
    onSubmit: async () => {
      fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          language: i18n.language,
        }),
      })
        .then((response) => response.json())
        .then(() => resetForm())
        .catch((error) => console.error("Error:", error));
    },
  });

  const setName: ChangeEventHandler<HTMLInputElement> = async (ev) => {
    setFieldError("name", undefined);
    await setFieldValue("name", ev.target.value);
    validateField("name");
  };
  const setContacts: ChangeEventHandler<HTMLInputElement> = async (ev) => {
    setFieldError("contacts", undefined);
    await setFieldValue("contacts", ev.target.value);
    validateField("contacts");
  };
  const setQuestion: ChangeEventHandler<HTMLInputElement> = async (ev) => {
    setFieldError("question", undefined);
    await setFieldValue("question", ev.target.value);
    validateField("question");
  };

  const submitHandler = () => {
    handleSubmit();
  };

  return {
    name: values.name,
    contacts: values.contacts,
    question: values.question,
    handleSubmit: submitHandler,
    setName,
    setContacts,
    setQuestion,
    errors,
    isValid,
  };
};
