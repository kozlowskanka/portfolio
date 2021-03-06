import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { getProjects } from '../../../redux/projectsRedux.js';

import { Col } from 'react-flexbox-grid';

import styles from './ProjectSummary.module.scss';

class Component extends React.Component {

  render () {
    const { color, number, name } = this.props;

    return (
      <Col align="center" xs={12} lg={2} md={3} className={styles.component}>
        <div className ={styles.product}>
          <article>
            <div
              className={styles.color}
              style={{
                backgroundColor: color,
              }}>
            </div>
            <div className={styles.features}>
              <h4 className={styles.name}>Pantone<sup>&reg;</sup></h4>
              <h4 className={styles.number}> {number}</h4>
              <p className={styles.description}>{name} <br/>
              </p>
            </div>
          </article>
        </div>
      </Col>
    );
  }
}

Component.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  number: PropTypes.string,
  name: PropTypes.string,
};

// const mapStateToProps = state => ({
//   projects: getProjects(state),
// });

// const Container = connect(mapStateToProps)(Component);

export {
  Component as ProjectSummary,
  // Container as ProjectSummary,
  Component as ProjectSummaryComponent,
};