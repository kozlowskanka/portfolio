import React from 'react';
import { shallow } from 'enzyme';
import { SectionTitleComponent } from './SectionTitle';

describe('Component SectionTitle', () => {
  it('should render without crashing', () => {
    const component = shallow(<SectionTitleComponent />);
    expect(component).toBeTruthy();
  });
});