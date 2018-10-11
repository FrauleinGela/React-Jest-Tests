import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import Header from '../header/Header';

describe('app', () => {
  it('renders without crashing', () => {
    shallow(
      <App>
        <h1>app test</h1>
      </App>,
    );
  });

  it('header always present', () => {
    const wrapper = shallow(
      <App>
        <h1>Test</h1>
      </App>,
    );
    const header = <div className="app-header"><Header /></div>;
    expect(wrapper.contains(header)).toEqual(true);
  });
});
