export type ContactItemsType = {
  id: number;
  title: string;
  text: string;
};

export type ReviewType = {
  id: number;
  quoteImg: any;
  description: string;
  userImg: string;
  name: string;
  role: string;
};

export type PortfolioType = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  contentDirection: string;
  background: string;
  tools?: string;
  company?: string;
  link?: string;
};

export type ContributionsType = {
  id: number;
  count: number;
  stringCount?: string;
  description: string;
  secondDescription: string;
};

export type WorkEthicsType = {
  id: number;
  count: string;
  title: string;
  img: any;
  description: string;
};

export type BlogType = {
  id: number;
  img: any;
  title: string;
  description: string;
  url: string;
};

export type DevelopmentDataType = {
  id: number;
  img: any;
  title: string;
  description: string;
  bg: string;
  radius: string;
};

export type SkillsType = {
  id: number;
  percentage: number;
  label: string;
};
