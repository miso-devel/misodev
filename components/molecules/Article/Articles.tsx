import { TArticle } from "../../../types/Article.d.ts";
import { Article } from "./Article.tsx";
type TProps = {
  articles: TArticle[];
};
export const Articles = ({ articles }: TProps) => {
  return (
    <>
      {articles.map((article) => {
        return <Article title={article.title} content={article.id} />;
      })}
    </>
  );
};
