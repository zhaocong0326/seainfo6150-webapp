import React from "react";
import PropTypes from 'prop-types';
import styles from './SlugButton.module.css';


const SlugButton = props => {

   return (
      <button
        className={styles.slugButton}
        onClick={() => alert(props.slug)}
      >
        {props.buttonText}
      </button>
    );
  };

SlugButton.propTypes = {
  article: PropTypes.object.isRequired
};
export default SlugButton;


