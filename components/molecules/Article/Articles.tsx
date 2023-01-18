import { TArticle } from '../../../types/Article.d.ts';
import { Article } from './Article.tsx';
type TProps = {
  articles: TArticle[];
};
export const Articles = ({ articles }: TProps) => {
  return (
    <>
      {articles.map((article) => {
        return (
          <Article
            id={article.id}
            title={article.title}
            date={article.updatedAt}
            categories={article.category}
          />
        );
      })}
    </>
  );
};
