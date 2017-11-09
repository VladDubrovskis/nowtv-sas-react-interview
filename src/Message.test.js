import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Message', () => {
  it('renders without crashing', () => {
    shallow(<Message />);
  });
});