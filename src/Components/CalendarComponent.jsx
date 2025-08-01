// CalendarComponent.tsx
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css'; 

const eventDates = [new Date(2025, 5, 7), new Date(2025, 5, 16), new Date(2025, 5, 19)];

const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());

  const tileContent = ({ date, view }) => {
    if (view === 'month' && eventDates.some(d => d.toDateString() === date.toDateString())) {
      return <div className="dot" />;
    }
  };

//   const tileClassName = ({ date, view }) => {
  const tileClassName = ({ date }) => {
    if (date.toDateString() === new Date().toDateString()) {
      return 'today';
    }
  };

  return (
    <div className="calendar-container ">
      <Calendar
        onChange={setValue}
        value={value}
        tileContent={tileContent}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default CalendarComponent;
