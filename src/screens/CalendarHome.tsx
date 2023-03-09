import styled from 'styled-components/native';
import FilterBar from 'components/filterbar/FilterBar';
import Calendar from 'components/canlendar/canlendar';

import { getDate, getMonth, getYear } from 'date-fns';
import { observer, useLocalObservable } from 'mobx-react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useRef } from 'react';

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

const CalendarHome = observer((props: StyledCalendarHomeProps) => {
  const date = new Date();
  const today = getDate(date);
  const todayMonth = getMonth(date);
  const todayYear = getYear(date);
  const scrollRef = useRef<ScrollView>(null);
  const canMomentum = useRef(false);

  const onMomentumScrollBegin = () => {
    canMomentum.current = true;
  };

  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (canMomentum.current) {
      // console.log('onMomentumScrollEnd');
      scrollEffect(e);
    }

    canMomentum.current = false;
  };

  const scrollToMiddleCalendar = (): void => {
    scrollRef.current?.scrollTo({
      x: Math.floor(props.width),
      animated: false,
    });
  };

  const scrollEffect = (e: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const xValue = Math.floor(e.nativeEvent.contentOffset.x);
    const maxLayoutFloor = Math.floor(props.width) * 2;
    console.log(xValue);
    if (!props.width || props.width === 1) {
      return;
    }

    if (xValue === 0) {
      if (scrollRef && scrollRef.current) {
        scrollToMiddleCalendar();
        if (calendarLocalStore._todayMonth === 0) {
          calendarLocalStore.todayMonth = 11;
          --calendarLocalStore.todayYear;
        } else {
          calendarLocalStore.todayMonth = calendarLocalStore._todayMonth - 1;
        }
      }
    } else if (xValue === maxLayoutFloor) {
      scrollToMiddleCalendar();
      if (scrollRef && scrollRef.current) {
        if (calendarLocalStore._todayMonth === 11) {
          calendarLocalStore.todayMonth = 0;
          ++calendarLocalStore.todayYear;
        } else {
          calendarLocalStore.todayMonth = calendarLocalStore._todayMonth + 1;
        }
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
      <CalendarDaysContainer
        width={props.width}
        height={props.height}>
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
      <SafeAreaView
        onLayout={(): void => {
          scrollToMiddleCalendar();
        }}
        style={{ flex: 1 }}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          ref={scrollRef}
          contentOffset={{ x: props.width, y: 0 }}
          onMomentumScrollBegin={onMomentumScrollBegin}
          onMomentumScrollEnd={(e) => onMomentumScrollEnd(e)}
          showsHorizontalScrollIndicator={false}>
          <Calendar
            year={calendarLocalStore._todayYear}
            month={
              calendarLocalStore._todayMonth === 0
                ? 11
                : calendarLocalStore._todayMonth
            }
            width={props.width}
          />
          <Calendar
            year={calendarLocalStore._todayYear}
            month={calendarLocalStore._todayMonth + 1}
            width={props.width}
          />
          <Calendar
            year={calendarLocalStore._todayYear}
            month={
              calendarLocalStore._todayMonth + 2 === 13
                ? 1
                : calendarLocalStore._todayMonth + 2
            }
            width={props.width}
          />
        </ScrollView>
      </SafeAreaView>
    </StyeldCalendarHome>
  );
});

export default CalendarHome;
