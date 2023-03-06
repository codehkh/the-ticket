import styled from 'styled-components/native';
//asset
import FilterSVG from 'assets/filter/filter.svg';

const FilterIcon = styled(FilterSVG)``;

interface StyledFilterBarProps {
  width: number;
  height: number;
  filterSection?: JSX.Element;
}

const ClickFilterIcon = styled.Pressable`
  //padding: 11px;
`;

const StyeldFilter = styled.View<StyledFilterBarProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height * 0.0392}px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  padding-right: ${(props) => props.width * 0.041}px;
  padding-left: ${(props) => props.width * 0.041}px;
  justify-content: space-between;
  align-items: center;
`;

const FilterBar = (props: StyledFilterBarProps, navigation: any) => {
  return (
    <StyeldFilter
      width={props.width}
      height={props.height}>
      {props.filterSection}
      <ClickFilterIcon>
        <FilterIcon />
      </ClickFilterIcon>
    </StyeldFilter>
  );
};

export default FilterBar;
