export type TMemo = {
  id: string;
  updatedAt: string;
  title: string;
  content: string;
  category: TCategory[];
};
export type TCategory = {
  id: string;
  name: string;
};
