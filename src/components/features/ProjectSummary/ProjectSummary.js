import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'react-flexbox-grid';

import styles from './ProjectSummary.module.scss';

class Component extends React.Component {

  render () {
    const { category, description, about, image } = this.props;

    return (
      <Col align="center" xs={12} lg={4} md={6} className={styles.component}>
        <div className ={styles.product}>
          <article>
            <div className={styles.features}>
              <div className={styles.imgContainer}>
                <img 
                  className={styles.image} 
                  src={image}>
                </img>
                <div className={styles.overlay}>
                  <p>{about}</p>
                </div>
              </div>
              <h6 className={styles.category}> {category}</h6>
              <p className={styles.description}> {description}</p>
            </div>
          </article>
        </div>
      </Col>
    );
  }
}

Component.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  about: PropTypes.string,
  image: PropTypes.string,
};

export {
  Component as ProjectSummary,
  Component as ProjectSummaryComponent,
};