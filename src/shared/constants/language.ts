export type Language = "ru" | "be" | "uk" | "en" | "lt" | "pl";

export const acceptedLanguages: Array<Language> = [
  "ru",
  "be",
  "uk",
  "en",
  "lt",
  "pl",
];
class LanguageController {
  selectedLanguage: Language;
  constructor() {
    this.selectedLanguage = "en";
  }
  setLanguage = (lang: Language) => {
    this.selectedLanguage = lang;
  };
}
export const languageController = new LanguageController();
