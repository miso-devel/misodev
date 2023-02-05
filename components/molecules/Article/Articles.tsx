import { TArticle } from '../../../types/Article.d.ts';
import { Article } from './Article.tsx';
type TProps = {
  articles: TArticle[];
};
export const Articles = ({ articles }: TProps) => {
  return (
    <div class="grid grid-cols-1 gap-10 md:grid-cols-3 mx-5 break-all">
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
    </div>
  );
};
