import styled from "styled-components";
import icon from "../assets/logo-black-small.png";

const Header = () => {
  return (
    <Container>
      <HeaderIcon src={icon} alt="icon" />
    </Container>
  );
};

const Container = styled.header`
  width: 300px;
  height: 55px;
  background-color: black;
  position: fixed;
  display: flex;
  top: 0;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2); /* 그림자 설정 */
`;
const HeaderIcon = styled.img`
  padding: 12px;
`;

export default Header;
