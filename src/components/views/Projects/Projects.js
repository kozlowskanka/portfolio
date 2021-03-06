import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-flexbox-grid';

import { connect } from 'react-redux';
import { getProjects } from '../../../redux/projectsRedux.js';

import { ProjectSummary } from '../../features/ProjectSummary/ProjectSummary';

import styles from './Projects.module.scss';

class Component extends React.Component {

  render () {
    const { projects } = this.props;
    console.log ('projects', projects);
    return (
      <div className={styles.component}>
        <Grid>
          <Row
            align ='center'>
            {projects.map(project => (
              <ProjectSummary
                key = {project.id}
                color = {project.color}
                number ={project.number}
                name ={project.name}
              />
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

Component.propTypes = {
  projects: PropTypes.array,
};

const mapStateToProps = state => ({
  projects: getProjects(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Projects,
  Component as ProjectsComponent,
};

