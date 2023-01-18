export const Header = () => {
  return (
    <div class="absolute right-1 lg:py-3 lg:px-6 px-2 py-2 rounded-md m-2 bg-white shadow-2xl">
      <ul class="flex lg:gap-6 gap-3">
        <li>
          <a href="/">
            <img
              src="/images/person.svg"
              alt="person"
              class="w-10 h-10 p-1 rounded-full hover:bg-purple-200 hover:scale-110 transition"
            />
          </a>
        </li>
        <li>
          <a href="/articles">
            <img
              src="/images/article.svg"
              alt="article"
              class="w-10 h-10 p-1 rounded-full hover:bg-purple-200 hover:scale-110 transition"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
