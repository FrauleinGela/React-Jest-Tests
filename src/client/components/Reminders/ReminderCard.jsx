import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ReminderCard({ reminder }) {
  return (
    <div className="Reminder card" key={reminder.id}>
      <div className="card__header">
        <strong className="card__header card__title">{reminder.title}</strong>
        <strong className="card__header card__date">{reminder.date}</strong>
      </div>
      <p className="card__desc">
        {reminder.description}
      </p>
      <button className="card__footer card__footer__link" type="button"><Link to={`/reminder/${reminder.id}`}>Show</Link></button>
    </div>
  );
}

ReminderCard.propTypes = {
  reminder: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.string.isRequired,
  }),
};

ReminderCard.defaultProps = {
  reminder: {},
};
