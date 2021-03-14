import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-flexbox-grid';

import { connect } from 'react-redux';
import { getProjects } from '../../../redux/projectsRedux.js';

import { ProjectSummary } from '../../features/ProjectSummary/ProjectSummary';
import { SectionTitle } from '../../common/SectionTitle/SectionTitle';
import { Footer } from '../../layout/Footer/Footer';

import styles from './Projects.module.scss';

import { personalData } from '../../../data/dataStore.js';

class Component extends React.Component {

  render () {
    const { projects } = this.props;
    console.log ('projects', projects);
    return (
      <div className={styles.component}>
        <Grid>
          <SectionTitle 
            title = {'Projects'}/>
          <Row
            align ='center'>
            {projects.map(project => (
              <ProjectSummary
                key = {project.id}
                category = {project.category}
                description = {project.description}
                about = {project.about}
                image ={project.image}
              />
            ))}
          </Row>
        </Grid>
        <Footer 
          phone={personalData.phone}
          mail={personalData.mail}>
        </Footer>
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

