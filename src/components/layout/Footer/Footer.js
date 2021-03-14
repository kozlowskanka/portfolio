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
      <a href="mailto:webmaster@example.com">{props.mail}</a>
    </p>
  </div>
);

Component.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  mail: PropTypes.string,
};

export {
  Component as Footer,
  Component as FooterComponent,
};
