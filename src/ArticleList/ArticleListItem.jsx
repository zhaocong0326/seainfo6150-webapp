import React from "react";
import PropTypes from 'prop-types';
import SlugButton from './SlugButton.jsx';
import styles from './ArticleListItem.module.css';

const ArticleListItem = props => {
  return (
    <article className={styles.article}>

    	<fieldset className={styles.field}>

    		<h1 className={styles.h1}>{props.article.title}</h1> 
	    
	      <p className={styles.p}>{props.article.shortText}</p>

	      <time className={styles.time} datetime={props.article.pubYear}> {props.article.pubDate}</time>

	      <SlugButton article={props.article}></SlugButton>
	      
  		</fieldset>
    </article>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired
};
export default ArticleListItem;



