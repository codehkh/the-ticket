import styled from 'styled-components/native';
//asset
import MyTicket from '../../assets/footer/my_ticket.svg';

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
`;

const Footer = (props: StyledFooterProps) => {
  return (
    <StyeldFooter
      width={props.width}
      height={props.height}>
      <MyTicket />
    </StyeldFooter>
  );
};

export default Footer;
