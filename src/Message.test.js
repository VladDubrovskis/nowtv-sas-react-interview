import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Message', () => {
  it('renders without crashing', () => {
    shallow(<Message />);
  });

  it('renders avatar when avatar is a string', () => {
    const wrapper = shallow(<Message avatar={"http://test"} />);
    expect(wrapper.find('img')).toHaveLength(1);
  });
});