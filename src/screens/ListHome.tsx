import styled from 'styled-components/native';

import BlankTicketSVG from 'assets/touchicons/blank_ticket.svg';

const BlankTicketIcon = styled(BlankTicketSVG)``;

interface StyledListHomeProps {
  width: number;
  height: number;
}

const StyeldBlankTicket = styled.View<StyledListHomeProps>`
  padding-right: ${(props) => props.width * 0.041}px;
  padding-left: ${(props) => props.width * 0.041}px;
  align-items: center;
`;

const ListHome = (props: StyledListHomeProps) => {
  return (
    <StyeldBlankTicket
      width={props.width}
      height={props.height}>
      <BlankTicketIcon width={props.width * 0.92} />
    </StyeldBlankTicket>
  );
};

export default ListHome;
