import React from 'react';
import { shallow } from 'enzyme';
import App from './App';



describe(('App'), () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders the no messages warning', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('p')).toContain('No messages to display');
  })
});
