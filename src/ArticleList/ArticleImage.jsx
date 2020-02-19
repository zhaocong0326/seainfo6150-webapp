import React from "react";
import propTypes from 'prop-types'
import styles from "./ArticleImage.module.css";

const ArticleImage = props => {
    return (
        <img src = {props.url} alt = {props.title}></img>
    );
};

ArticleImage.prototypes = {
    url: propTypes.string.isRequired,
    title: propTypes.string.isRequired
};

export default ArticleImage;