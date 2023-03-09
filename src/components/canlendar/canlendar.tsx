import React from 'react';
import * as Style from 'components/canlendar/canlendar.style';

interface CalendarProps {
  year: number;
  month: number;
  width : number;
}

const getDaysInMonth = (year: number, month: number) => {
  // February has 29 days in a leap year
  if (
    month === 1 &&
    ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
  ) {
    return 29;
  }
  // Other months have a fixed number of days
  return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

const getFirstDayOfWeek = (year: number, month: number) => {
  return new Date(year, month, 0).getDay();
};

const Calendar: React.FC<CalendarProps> = ({ year, month,width }) => {
  const daysInMonth = getDaysInMonth(year, month - 1);
  const firstDayOfWeek = getFirstDayOfWeek(year, month - 1);

  const days: number[] = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const emptyDays: number[] = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    emptyDays.push(i);
  }

  const totalDays = days.length + emptyDays.length;
  const weeksInMonth = Math.ceil(totalDays / 7);

  const renderDay = (day: number, index: number) => {
    let weekend = 'none';
    if ((index + 2) % 7 === 0) {
      weekend = 'sat';
    } else if ((index + 1) % 7 === 0) {
      weekend = 'sun';
    } else {
      weekend = 'none';
    }

    return (
      <Style.CalendarDay
        key={index}
        weeksInMonth={weeksInMonth}>
        <Style.CalendarDayNum weekend={weekend}>{day}</Style.CalendarDayNum>
      </Style.CalendarDay>
    );
  };

  const renderEmptyDay = (index: number) => {
    return (
      <Style.CalendarDay
        weeksInMonth={weeksInMonth}
        key={index}
      />
    );
  };

  const renderDays = () => {
    const daysToRender = [];

    for (let i = 0; i < totalDays; i++) {
      if (i < emptyDays.length) {
        daysToRender.push(renderEmptyDay(i));
      } else {
        daysToRender.push(renderDay(days[i - emptyDays.length], i));
      }
    }

    return daysToRender;
  };
  return (
    <Style.CalendarContainer widthCal = {width}>
      <Style.CalendarDaysContainer>
        {renderDays()}
      </Style.CalendarDaysContainer>
    </Style.CalendarContainer>
  );
};

export default Calendar;
