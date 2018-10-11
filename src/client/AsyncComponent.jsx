import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import LoadingRoute from './commons/components/LoadingRoute';

class AsyncComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      Component: null,
    };
  }

  componentWillMount() {
    const { Component } = this.state;
    const { moduleProvider } = this.props;
    if (!Component) {
      moduleProvider().then(({ Component: comp }) => this.setState({ Component: comp }));
    }
  }

  render() {
    const { Component } = this.state;

    return (
      <div>
        {Component ? <Component /> : <LoadingRoute />}
      </div>
    );
  }
}

AsyncComponent.propTypes = {
  moduleProvider: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.func,
  ]).isRequired,
};

export default AsyncComponent;
