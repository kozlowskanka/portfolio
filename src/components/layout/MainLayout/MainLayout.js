import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainLayout.module.scss';

const Component = ({children}) => (
  <div className = {styles.component}>
    <main>
      {children}
    </main>
  </div>
);
Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as MainLayout,
  Component as MainLayoutComponent,
};
