export type BlockName =
  | "main"
  | "about"
  | "development"
  | "training"
  | "contacts";

export const NAV_CONFIG: Array<{ title: string; href: BlockName }> = [
  { title: "header.main", href: "main" },
  { title: "header.about", href: "about" },
  { title: "header.development", href: "development" },
  { title: "header.training", href: "training" },
  { title: "header.contacts", href: "contacts" },
];

export const BLOCKS_ID: Record<string, BlockName> = {
  main: "main",
  about: "about",
  contacts: "contacts",
  development: "development",
  training: "training",
};
