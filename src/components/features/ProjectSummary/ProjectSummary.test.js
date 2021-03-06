import React from 'react';
import { shallow } from 'enzyme';
import { ProjectSummaryComponent } from './ProjectSummary';

describe('Component ProjectSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProjectSummaryComponent />);
    expect(component).toBeTruthy();
  });
});
