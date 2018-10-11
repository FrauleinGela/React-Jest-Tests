import React from 'react';
import { shallow } from 'enzyme';
import Reminder from '../Reminder';

jest.mock('../../../shared/request');

describe('Reminder', () => {
  it('Display a Reminder Form if id found', () => {
    const props = {
      match: {
        id: 2, isExact: true, path: '', url: '',
      },
    };

    const wrapper = shallow(<Reminder
      required
      {...props}
    />);
    setImmediate(() => {
      expect(wrapper.find('.Reminder.block__detail')).toHaveLength(1);
    });
  });

  it('Display a Loading  if id is not found', () => {
    const props = {
      match: {
        id: 20, isExact: true, path: '', url: '',
      },
    };

    const wrapper1 = shallow(<Reminder
      required
      {...props}
    />);
    setImmediate(() => {
      expect(wrapper1.find('.block-loading--active')).toHaveLength(1);
    });
  });
});
