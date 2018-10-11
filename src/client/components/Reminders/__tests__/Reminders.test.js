import React from 'react';
import { shallow } from 'enzyme';
import Reminders from '../Reminders';
import ReminderCard from '../ReminderCard';

jest.mock('../../../shared/request');

describe('Reminders ', () => {
  it('Display ReminderCards and reminders state', () => {
    const wrapper = shallow(<Reminders />);
    setImmediate(() => {
      expect(wrapper.state('reminders')).toHaveLength(2);
      expect(wrapper.find(ReminderCard)).toHaveLength(2);
    });
  });

  it('Loading block is displayed while request is loading', () => {
    const wrapper1 = shallow(<Reminders />);
    expect(wrapper1.find('.block-loading--active')).toHaveLength(1);
    jest.useFakeTimers();
    setImmediate(() => {
      expect(wrapper1.find('.block-loading--active')).toHaveLength(0);
    });
  });
});
