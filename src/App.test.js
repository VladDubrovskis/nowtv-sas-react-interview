import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe(('App'), () => {

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders the no messages warning', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('p').props().children).toContain('No messages to display');
  });

  it('renders messages when there are messages', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({messages: [{message1: true}]});
    expect(wrapper.update().find('p').props().children).toContain('Messages');
  });
});
