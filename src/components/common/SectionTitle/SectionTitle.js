import React from 'react';
import PropTypes from 'prop-types';

import styles from './SectionTitle.module.scss';

const Component = (props) => (
  <div className={styles.component}>
    <h1>{props.title}</h1>
  </div>
);

Component.propTypes = {
  title: PropTypes.string,
};

export {
  Component as SectionTitle,
  Component as SectionTitleComponent,
};
