import styled from 'styled-components/native';
import FilterBar from 'components/filterbar/FilterBar';
import Calendar from 'components/canlendar/canlendar';

import { getDate, getMonth, getYear, addMonths, subMonths } from 'date-fns';
import { useLocalObservable } from 'mobx-react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { useRef, useState } from 'react';

interface StyledCalendarHomeProps {
  width: number;
  height: number;
}

const FilterText = styled.Text`
  font-family: 'NotoSansKR-Medium';
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
  text-align: left;
  color: #1c1c1e;
`;

const StyeldCalendarHome = styled.View<{ homeheight: number }>`
  display: flex;
  flex-direction: column;
  height: ${({ homeheight }) => homeheight}px;
`;

const CalendarHome = (props: StyledCalendarHomeProps) => {
  const date = new Date();
  const today = getDate(date);
  const todayMonth = getMonth(date);
  const todayYear = getYear(date);

  const scrollRef = useRef<ScrollView>(null);
  const [layoutWidth, setLayoutWidth] = useState(props.width);
  const [currentDate, setCurrentDate] = useState<Date>(date);

  const scrollToMiddleCalendar = (): void => {
    scrollRef.current?.scrollTo({
      x: Math.floor(layoutWidth),
      animated: false,
    });
  };

  const prevMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    currentDate.getDate()
  );

  const nextMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    currentDate.getDate()
  );

  const scrollEffect = (e: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const xValue = Math.floor(e.nativeEvent.contentOffset.x);
    const maxLayoutFloor = Math.floor(layoutWidth) * 2;
    console.log(xValue);
    if (!layoutWidth || layoutWidth === 1) {
      return;
    }

    if (xValue === 0) {
      if (scrollRef && scrollRef.current) {
        scrollToMiddleCalendar();
        setCurrentDate(prevMonth);
      }
    } else if (xValue === maxLayoutFloor) {
      if (scrollRef && scrollRef.current) {
        scrollToMiddleCalendar();
        setCurrentDate(nextMonth);
      }
    }
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
    <StyeldCalendarHome homeheight={props.height}>
      <FilterBar
        width={props.width}
        height={props.height}
        filterSection={
          <FilterText>{`${currentDate.getFullYear()}.${
            currentDate.getMonth() + 1
          }`}</FilterText>
        }
      />
      <SafeAreaView
        onLayout={(e): void => {
          setLayoutWidth(e.nativeEvent.layout.width);
          scrollToMiddleCalendar();
        }}>
        <ScrollView
          horizontal
          pagingEnabled
          contentOffset={{ x: layoutWidth, y: 0 }}
          ref={scrollRef}
          onScrollEndDrag={scrollEffect}>

            <Calendar
              year={currentDate.getFullYear()}
              month={currentDate.getMonth()}
              width={props.width}
            />
            <Calendar
              year={currentDate.getFullYear()}
              month={currentDate.getMonth() + 1}
              width={props.width}
            />
            <Calendar
              year={currentDate.getFullYear()}
              month={currentDate.getMonth() + 2}
              width={props.width}
            />

        </ScrollView>
      </SafeAreaView>
    </StyeldCalendarHome>
  );
};

export default CalendarHome;
