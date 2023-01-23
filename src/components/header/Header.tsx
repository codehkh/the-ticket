import styled from 'styled-components/native';
//asset
import SpectaclesSVG from 'assets/header/spectacles.svg';
import AlarmSVG from 'assets/header/alarm.svg';
import PlusSVG from 'assets/header/plus.svg';
import ProfileSVG from 'assets/header/profile.svg';
//fonts
import { useFonts } from 'expo-font';

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
`;

const HeaderProfileAria = styled.View`
  width: 104px;
  height: 42px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

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
  padding-right: 6px;
  padding-left: 13px;
  justify-content: space-between;
  align-items: center;
`;

const Header = (props: StyledHeaderProps) => {
  let [fontsLoaded] = useFonts({
    'NotoSansKR-Medium': require('assets/fonts/NotoSansKR-Medium.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <StyeldHeader
      width={props.width}
      height={props.height}>
      <HeaderProfileAria>
        <ProfileIcon />
        <ProfileText>{'희진'}</ProfileText>
      </HeaderProfileAria>
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
