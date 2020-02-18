import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from './ArticleListItem.jsx';
import styles from './ArticleList.module.css';

const ArticleList = props => {
  return (
  	<section className = {styles.container}>
      {props.articles.map(article => (
        <li key={article.slug}>
            <ArticleListItem article={article} />
        </li>
      ))}
    </section>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
