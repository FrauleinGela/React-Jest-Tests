import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReminderService from '../../services/ReminderService';

export default class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, reminder: {} };
    this.reminderRequest = null;
  }

  componentDidMount() {
    const { match } = this.props;
    const reminderId = match.id;
    this.getReminder(reminderId);
  }

  componentWillUnmount() {
    this.reminderRequest.cancel('api is being canceled');
  }

  getReminder(id) {
    this.reminderRequest = ReminderService.get({ id });
    this.reminderRequest.request.then((data) => {
      if (data.id) {
        this.setState({
          isLoading: false,
          reminder: data,
        });
      }
    });
  }


  render() {
    const { reminder, isLoading } = this.state;
    console.log('is loading', isLoading)
    if (isLoading) {
      return <p className="block block-loading--active"> Loading ...</p>;
    }
    return (
      <div className="Reminder block__detail">
        Reminder show
        <div className="block__detail__block-info">
          {reminder.title}
        </div>

      </div>
    );
  }
}

Reminder.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number,
  }),
};

Reminder.defaultProps = {
  match: {
    id: null,
  },
};
