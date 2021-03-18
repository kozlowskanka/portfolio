import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

import { Link } from 'react-router-dom';

const Component = (props) => (
  <div className={styles.component}>
    <p>
      <span className ={styles.bold}>Author: </span>    
      <Link to='/'>{props.name}</Link> 
    </p>
    <p>
      <span className ={styles.bold}>Phone: </span>{props.phone}
    </p>
    <p>
      <span className ={styles.bold}>Mail: </span>
      <a href={props.mail}>{props.mail}</a>
    </p>
    <p>
      <span className ={styles.bold}>Github: </span>
      <a href="https://github.com/kozlowskanka" target="_blank">Show GitHub</a>
    </p>
  </div>
);

Component.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  mail: PropTypes.string,
  portfolio: PropTypes.string,
};

export {
  Component as Footer,
  Component as FooterComponent,
};
