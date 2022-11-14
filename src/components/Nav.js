export default function Nav({ articles, setArticle }) {
  return (
    <nav>
      {!articles
        ? "No articles"
        : articles.map((a) => (
            <p class="articleSelect" key={a.id} onClick={() => setArticle(a)}>
              {a.title}
            </p>
          ))}
    </nav>
  );
}
