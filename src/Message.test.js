import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

const defaultProps = {
  "messageId": "1469e146-075f-46d2-888b-8d3152da1be9",
  "userId": "cff77726-363e-4ba6-a953-4dc431cdd383",
  "fullName": "Ralph Nguyen",
  "timestamp": "2016-01-01T02:00:00Z",
  "email": "rnguyen6@odnoklassniki.ru",
  "message": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
  "avatar": "http://dummyimage.com/100x100.png/dddddd/000000",
};

describe('Message', () => {
  it('renders without crashing', () => {
    shallow(<Message />);
  });

  it('renders the expected output', () => {
    const wrapper = shallow(<Message {...defaultProps} />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper).toContain(defaultProps.fullName);
    expect(wrapper).toContain(defaultProps.timestamp);
    expect(wrapper).toContain(defaultProps.email);
  });

  it('renders avatar when avatar is a string', () => {
    const wrapper = shallow(<Message {...defaultProps} avatar={null} />);
    expect(wrapper.find('img')).toHaveLength(0);
  });

});