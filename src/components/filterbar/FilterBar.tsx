import styled from 'styled-components/native';
//asset
import FilterSVG from 'assets/filter/filter.svg';

const FilterIcon = styled(FilterSVG)``;

interface StyledFilterBarProps {
  width: number;
  height: number;
}

const ClickFilterIcon = styled.Pressable`
  padding: 11px;
`;
const FilterText = styled.Text`
  font-family: 'NotoSansKR-Medium';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #8e8e93;
`;

const StyeldFilter = styled.View<StyledFilterBarProps>`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height * 0.06}px;
  top: ${(props) => props.height * 0.09}px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  padding-right: 18px;
  padding-left: 16px;
  justify-content: space-between;
  align-items: center;
`;

const FilterBar = (props: StyledFilterBarProps,navigation:any) => {
  return (
    <StyeldFilter
      width={props.width}
      height={props.height}>
      <FilterText>{'전체'}</FilterText>
      <ClickFilterIcon>
        <FilterIcon />
      </ClickFilterIcon>
    </StyeldFilter>
  );
};

export default FilterBar;
