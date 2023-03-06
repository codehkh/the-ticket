import styled from 'styled-components/native';
import FilterBar from 'components/filterbar/FilterBar';
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

const FilterText = styled.Text`
  font-family: 'NotoSansKR-Medium';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #8e8e93;
`;

const StyeldListHome = styled.View`
    display: flex;
    flex-direction: column;
`;


const ListHome = (props: StyledListHomeProps) => {
  return (
    <StyeldListHome>
      <FilterBar
        width={props.width}
        height={props.height}
        filterSection={<FilterText>{"전체"}</FilterText>}
      />
      <StyeldBlankTicket
        width={props.width}
        height={props.height}>
        <BlankTicketIcon width={props.width * 0.92} />
      </StyeldBlankTicket>
    </StyeldListHome>
  );
};

export default ListHome;
