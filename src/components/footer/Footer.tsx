import styled from 'styled-components/native';
//asset
import MyTicketSVG from 'assets/footer/my_ticket.svg';
import CommunicateSVG from 'assets/footer/communicate.svg';
import ExploreSVG from 'assets/footer/explore.svg';

const MyTicketIcon = styled(MyTicketSVG)``;
const CommunicateIcon = styled(CommunicateSVG)``;
const ExploreIcon = styled(ExploreSVG)``;

interface StyledFooterProps {
  width: number;
  height: number;
}

const StyeldFooter = styled.View<StyledFooterProps>`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height * 0.11}px;
  top: ${(props) => props.height * 0.89}px;
  background: #ffffff;
  border: 0.8px solid #e5e5ea;
  display: flex;
  flex-direction: row;
  padding-right: 58px;
  padding-left: 58px;
  padding-top: 18px;
  justify-content: space-between;
  align-items: baseline;
`;

const Footer = (props: StyledFooterProps) => {
  return (
    <StyeldFooter
      width={props.width}
      height={props.height}>
      <MyTicketIcon />
      <CommunicateIcon />
      <ExploreIcon />
    </StyeldFooter>
  );
};

export default Footer;
