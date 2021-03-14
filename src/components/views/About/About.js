import React from 'react';

import styles from './About.module.scss';
import { personalData } from '../../../data/dataStore.js';

import { Link } from 'react-router-dom';

const Component = () => (
  <div className={styles.component}>
    <h3>{personalData.description}</h3>
    <Link to='/projects'>
      <h4>Show Projects</h4>
    </Link>
  </div>
);

Component.propTypes = {

};

export {
  Component as About,
  Component as AboutComponent,
};

