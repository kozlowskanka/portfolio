import React from 'react';

import styles from './HomePage.module.scss';

import { Hero } from '../../layout/Hero/Hero';
import { personalData } from '../../../data/dataStore.js';

const Component = () => (
  <div className={styles.component}>
    <Hero name = {personalData.name}/>
  </div>
);

Component.propTypes = {

};

export {
  Component as HomePage,
  Component as HomePageComponent,
};

