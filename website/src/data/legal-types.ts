export type LegalDoc = {
  title: string;
  intro: string[];
  sections: { heading: string; paragraphs: string[] }[];
};
