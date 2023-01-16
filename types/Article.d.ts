export type TArticle = {
  id: string;
  updatedAt: string;
  title: string;
  content: string;
  category: {
    id: string;
    name: string;
  };
};
