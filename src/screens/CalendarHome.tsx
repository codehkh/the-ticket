import styled from 'styled-components/native';
import FilterBar from 'components/filterbar/FilterBar';
import Calendar from 'components/canlendar/canlendar';

import { getDate, getMonth, getYear, addMonths, subMonths } from 'date-fns';
import { useLocalObservable } from 'mobx-react';
import { ScrollView } from 'react-native';
import { useRef, useState } from 'react';

interface StyledCalendarHomeProps {
  width: number;
  height: number;
}
const CalendarDayText = styled.Text`
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #aeaeb2;
`;

const CalendarDayTextView = styled.View`
  align-items: center;
  justify-content: center;
  width: 14.27%;
  height: 100%;
  padding-top: 3.5%;
`;

const CalendarDaysContainer = styled.View<StyledCalendarHomeProps>`
  flex-direction: row;
  flex-wrap: wrap;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height * 0.0457}px;
`;

const FilterText = styled.Text`
  font-family: 'NotoSansKR-Medium';
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
  text-align: left;
  color: #1c1c1e;
`;

const StyeldCalendarHome = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CalendarHome = (props: StyledCalendarHomeProps) => {
  const date = new Date();
  const today = getDate(date);
  const todayMonth = getMonth(date);
  const todayYear = getYear(date);

  const [scrollViewOffset, setScrollViewOffset] = useState(0);
  const handleScrollViewScroll = (event: any) => {
    const offset = event.nativeEvent.contentOffset.x;
    if (offset > scrollViewOffset) {
      // Scrolling right, increase month
      const newMonth = addMonths(
        new Date(calendarLocalStore.todayYear, calendarLocalStore.todayMonth),
        1
      );
      calendarLocalStore.todayYear = getYear(newMonth);
      calendarLocalStore.todayMonth = getMonth(newMonth);
    } else if (offset < scrollViewOffset) {
      // Scrolling left, decrease month
      const newMonth = subMonths(
        new Date(calendarLocalStore.todayYear, calendarLocalStore.todayMonth),
        1
      );
      calendarLocalStore.todayYear = getYear(newMonth);
      calendarLocalStore.todayMonth = getMonth(newMonth);
    }
    setScrollViewOffset(offset);
  };
  const calendarLocalStore = useLocalObservable(() => ({
    _today: today,
    _todayMonth: todayMonth,
    _todayYear: todayYear,

    get today() {
      return this._today;
    },
    set today(val) {
      this._today = val;
    },
    get todayMonth() {
      return this._todayMonth;
    },
    set todayMonth(val) {
      this._todayMonth = val;
    },
    get todayYear() {
      return this._todayYear;
    },
    set todayYear(val) {
      this._todayYear = val;
    },
  }));

  return (
    <StyeldCalendarHome>
      <FilterBar
        width={props.width}
        height={props.height}
        filterSection={
          <FilterText>{`${calendarLocalStore._todayYear}.${
            calendarLocalStore._todayMonth + 1
          }`}</FilterText>
        }
      />
      <CalendarDaysContainer width={props.width} height={props.height}>
        <CalendarDayTextView>
          <CalendarDayText>월</CalendarDayText>
        </CalendarDayTextView>
        <CalendarDayTextView>
          <CalendarDayText>화</CalendarDayText>
        </CalendarDayTextView>
        <CalendarDayTextView>
          <CalendarDayText>수</CalendarDayText>
        </CalendarDayTextView>
        <CalendarDayTextView>
          <CalendarDayText>목</CalendarDayText>
        </CalendarDayTextView>
        <CalendarDayTextView>
          <CalendarDayText>금</CalendarDayText>
        </CalendarDayTextView>
        <CalendarDayTextView>
          <CalendarDayText>토</CalendarDayText>
        </CalendarDayTextView>
        <CalendarDayTextView>
          <CalendarDayText>일</CalendarDayText>
        </CalendarDayTextView>
      </CalendarDaysContainer>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        onScrollEndDrag={handleScrollViewScroll}>
        <Calendar
          year={calendarLocalStore._todayYear}
          month={calendarLocalStore._todayMonth + 1}
          width={props.width}
        />
        <Calendar
          year={calendarLocalStore._todayYear}
          month={calendarLocalStore._todayMonth + 2}
          width={props.width}
        />
      </ScrollView>
    </StyeldCalendarHome>
  );
};

export default CalendarHome;
