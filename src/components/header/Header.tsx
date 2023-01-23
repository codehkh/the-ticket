import styled from 'styled-components/native';
//asset
import SpectaclesSVG from 'assets/header/spectacles.svg';
import AlarmSVG from 'assets/header/alarm.svg';
import PlusSVG from 'assets/header/plus.svg';

const SpectaclesIcon = styled(SpectaclesSVG)``;
const AlarmIcon = styled(AlarmSVG)``;
const PlusIcon = styled(PlusSVG)``;

const HeaderEachIconAria = styled.View`
  width: 42px;
  height: 42px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const HeaderIconAria = styled.View`
  width: 129px;
  height: 42px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 0.8px solid #21215e;
`;

interface StyledHeaderProps {
  width: number;
  height: number;
}

const StyeldHeader = styled.View<StyledHeaderProps>`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height * 0.07}px;
  top: 0px;
  margin-top: 12px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  padding-right: 58px;
  padding-left: 58px;
  padding-top: 20px;
  justify-content: space-between;
  align-items: baseline;
`;

const Header = (props: StyledHeaderProps) => {
  return (
    <StyeldHeader
      width={props.width}
      height={props.height}>
      <HeaderIconAria>
        <HeaderEachIconAria>
          <SpectaclesIcon />
        </HeaderEachIconAria>
        <HeaderEachIconAria>
          <AlarmIcon />
        </HeaderEachIconAria>
        <HeaderEachIconAria>
          <PlusIcon />
        </HeaderEachIconAria>
      </HeaderIconAria>
    </StyeldHeader>
  );
};

export default Header;
