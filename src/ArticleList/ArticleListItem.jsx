import React from "react";
import PropTypes from 'prop-types';


const ArticleListItem = props => {
  const article = props.article;
  return (
    <article>
      <header>
        <h1>{article.title}</h1>
      </header>
      <body>
        <p>{article.shortText}</p>
        <time datetime={article.pubYear}> {article.pubDate}</time>
        <button onClick={() => alert(`${article.slug}`)}>
          show article slug
        </button>
      </body>
    </article>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired
};
export default ArticleListItem;