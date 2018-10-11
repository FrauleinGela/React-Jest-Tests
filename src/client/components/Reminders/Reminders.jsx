import React from 'react';
import ReminderService from '../../services/ReminderService';
import ReminderCard from './ReminderCard';
// import './Reminders.scss';

export default class Reminders extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, reminders: [] };
    this.reminderRequest = null;
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getReminders();
  }

  componentWillUnmount() {
    this.reminderRequest.cancel('api is being canceled');
  }

  getReminders() {
    this.reminderRequest = ReminderService.get();
    this.reminderRequest.request.then((data) => {
      this.setState({
        isLoading: false,
        reminders: data,
      });
    });
  }

  render() {
    const { isLoading, reminders } = this.state;
    if (isLoading) {
      // TODO: Add loading as a global component
      return <p className="block block-loading--active">Loading</p>;
    }
    const remindersDom = [];
    reminders.forEach((reminder) => {
      remindersDom.push(
        <ReminderCard key={reminder.id} reminder={reminder} />,
      );
    });
    return (
      <div>{remindersDom}</div>
    );
  }
}
