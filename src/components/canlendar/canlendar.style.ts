import styled from 'styled-components/native';

export const CalendarContainer = styled.View<{ widthCal: number }>`
  ${({ widthCal }) => {
    return `width: ${widthCal}px`;
  }}
  background-color: #ffffff;
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
    if (weeksInMonth === 4) return `height: 33.25%`;
    else if (weeksInMonth === 5) return `height: 26.20%`;
    else return `height: 21.5%`;
  }}
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
