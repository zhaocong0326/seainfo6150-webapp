import React from "react";
import PropTypes from 'prop-types';
import SlugButton from './SlugButton.jsx';
import styles from './ArticleListItem.module.css';

const ArticleListItem = props => {
  return (
        <article className={styles.container}>
          <h3 className={styles.title}>{props.article.title}</h3>
          <p>{props.article.shortText}</p>
          <time className={styles.pubDate} dateTime={props.article.pubYear}>{props.article.pubDate}</time>
          <SlugButton slug={props.article.slug} buttonText={props.article.author} />
        </article>
      );
    };

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired
};
export default ArticleListItem;


