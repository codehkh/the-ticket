import styled from 'styled-components/native';

export const CalendarContainer = styled.View<{ widthCal: number }>`
  ${({ widthCal }) => {
    return `width: ${widthCal}px`;
  }}
  background-color: #fff;
  height:100%;
`;

export const CalendarDaysContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CalendarDay = styled.View<{ weeksInMonth: number }>`
  width: 14.27%;
  align-items: center;
  justify-content: center;
  ${({ weeksInMonth }) => {
    if (weeksInMonth === 4) return `height: 20.88%`;
    else if (weeksInMonth === 5) return `height: 24.88%`;
    else return `height: 19.88%`;
  }}
`;

export const CalendarDayText = styled.Text`
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #aeaeb2;
`;

export const CalendarDayTextView = styled.View`
  align-items: center;
  justify-content: center;
  width: 14.27%;
  height: 8.57%;
  padding-top: 3.5%;
`;

export const CalendarDayNum = styled.Text<{ weekend: string }>`
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  /* D1: 1C1C1E */

  ${({ weekend }) => {
    if (weekend === 'sat') return `color: #007AFF`;
    else if (weekend === 'sun') return `color: #FF3B30`;
    else return `color: #1c1c1e`;
  }}
`;
