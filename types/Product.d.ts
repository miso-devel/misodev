export type TProduct = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  site: string;
  description: string;
  url: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  isSiteOpen: boolean;
  githubUrl: string;
  producedAt?: string;
};
