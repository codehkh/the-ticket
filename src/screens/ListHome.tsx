import styled from 'styled-components/native';

import BlankTicketSVG from 'assets/touchicons/blank_ticket.svg';

const BlankTicketIcon = styled(BlankTicketSVG)``;

interface StyledListHomeProps {
  width: number;
  height: number;
}

const StyeldBlankTicket = styled.View`
  padding-right: 17px;
  padding-left: 17px;
  align-items: center;
`;

const ListHome = (props: StyledListHomeProps) => {
  return (
    <StyeldBlankTicket>
    <BlankTicketIcon width={props.width*0.9} /></StyeldBlankTicket>
  );
};

export default ListHome;
