import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex-container">
      <nav>
        <Link to="/">Reminders</Link>

        <Link to="reminder">Reminder</Link>
      </nav>
    </div>
  );
}
