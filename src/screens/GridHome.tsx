import styled from 'styled-components/native';

import BlankTicketColSVG from 'assets/touchicons/blank_ticket_col.svg';

const BlankTicketColIcon = styled(BlankTicketColSVG)``;

interface StyledGridHomeProps {
  width: number;
  height: number;
}

const StyeldBlankTicket = styled.View`
  padding-right: 17px;
  padding-left: 17px;
  align-items: flex-start;
  display: flex;
  margin-top: 0px;
`;

const GridHome = (props: StyledGridHomeProps) => {
  return (
    <StyeldBlankTicket>
    <BlankTicketColIcon width={props.width*0.28} /></StyeldBlankTicket>
  );
};

export default GridHome;
