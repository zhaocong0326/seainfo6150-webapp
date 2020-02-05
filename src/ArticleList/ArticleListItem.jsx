import React from "react";
import PropTypes from 'prop-types';


const ArticleListItem = props => {
  return (
    <article>

      <h1>{props.article.title}</h1>
    
      <p>{props.article.shortText}</p>

      <time datetime={props.article.pubYear}> {props.article.pubDate}</time>

      <button onClick={() => alert(props.article.slug)}> show article slug </button>

    </article>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired
};
export default ArticleListItem;