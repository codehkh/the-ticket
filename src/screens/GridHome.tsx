import styled from 'styled-components/native';
import FilterBar from 'components/filterbar/FilterBar';
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

const FilterText = styled.Text`
  font-family: 'NotoSansKR-Medium';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #8e8e93;
`;
const GridHome = (props: StyledGridHomeProps) => {
  return (
    <>
      <FilterBar
        width={props.width}
        height={props.height}
        filterSection={<FilterText>{"전체"}</FilterText>}
      />
      <StyeldBlankTicket>
        <BlankTicketColIcon width={props.width * 0.28} />
      </StyeldBlankTicket>
    </>
  );
};

export default GridHome;
