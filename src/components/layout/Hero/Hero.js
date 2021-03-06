import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Hero.module.scss';

const Component = (props) => (
  <div className={styles.component}>
    <Link to='/projects'>
      <h2>{props.name}</h2>
    </Link>
  </div>
);

Component.propTypes = {
  name: PropTypes.string,
};

export {
  Component as Hero,
  Component as HeroComponent,
};
