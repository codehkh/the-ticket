import styled from 'styled-components/native';
//asset
import SpectaclesSVG from 'assets/header/spectacles.svg';
import AlarmSVG from 'assets/header/alarm.svg';
import PlusSVG from 'assets/header/plus.svg';
import ProfileSVG from 'assets/header/profile.svg';

const SpectaclesIcon = styled(SpectaclesSVG)``;
const AlarmIcon = styled(AlarmSVG)``;
const PlusIcon = styled(PlusSVG)``;
const ProfileIcon = styled(ProfileSVG)``;

const ProfileText = styled.Text`
  font-family: 'NotoSansKR-Medium';
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  margin-left: 12px;
`;

const HeaderProfileAria = styled.View<StyledHeaderProps>`
width: 30%;
  height: ${(props) => props.height * 0.0522}px;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const HeaderEachIconAria = styled.View<StyledHeaderProps>`
  width: ${(props) => props.width * 0.0287}px;
  height: ${(props) => props.height * 0.0287}px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const HeaderIconAria = styled.View<StyledHeaderProps>`
  width: 27%;
  height: ${(props) => props.height * 0.0522}px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface StyledHeaderProps {
  width: number;
  height: number;
}

const StyeldHeader = styled.View<StyledHeaderProps>`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height * 0.0849}px;
  top: 0px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  padding-right: ${(props) => props.width * 0.05}px;
  padding-left: ${(props) => props.width * 0.041}px;
  padding-top: ${(props) => props.height * 0.0261}px;
  justify-content: space-between;
  align-items: center;
`;

const Header = (props: StyledHeaderProps) => {
  return (
    <StyeldHeader
      width={props.width}
      height={props.height}>
      <HeaderProfileAria
        width={props.width}
        height={props.height}>
        <ProfileIcon />
        <ProfileText>{'희진'}</ProfileText>
      </HeaderProfileAria>
      <HeaderIconAria
        width={props.width}
        height={props.height}>
        <HeaderEachIconAria
          width={props.width}
          height={props.height}>
          <SpectaclesIcon />
        </HeaderEachIconAria>
        <HeaderEachIconAria
          width={props.width}
          height={props.height}>
          <AlarmIcon />
        </HeaderEachIconAria>
        <HeaderEachIconAria
          width={props.width}
          height={props.height}>
          <PlusIcon />
        </HeaderEachIconAria>
      </HeaderIconAria>
    </StyeldHeader>
  );
};

export default Header;
