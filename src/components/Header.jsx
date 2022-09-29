import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import logo from './../Assets/Images/logo.png'

const Header = () => {
  return (
    <StyleHeader>
      <Container>
        <StyledNavLink to='/'>
          <Logo src={logo}  alt="logo"/>
        </StyledNavLink>
        <Menu>
          <SNavLink to='/'>Сonverter</SNavLink>          
          <SNavLink to='/courses'>Сourses</SNavLink>          
        </Menu>
      </Container>
    </StyleHeader>
  )
}
export default Header

const StyleHeader = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center; 
  background: linear-gradient(90deg, #3f91fc 0%, #2382ff 180%);
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 5px;
  @media(max-width: 768px){
    width: 80%;   
  }
`;
const Logo = styled.img`
  height: 60px;
  @media (max-width: 450px){
    height: 50px;
  }
  @media (max-width: 320px){
    display: none;
  }
`;
const Menu = styled.ul`
  display: flex;
  @media (max-width: 450px){
    :nth-child(1){
      margin-right: 8px;
  }
`;
const SNavLink = styled(NavLink)`
  background-image: linear-gradient(
    to right,
    #515151,
    #1e1e1e 50%,
    #2884f6 0%
  );
  background-size: 400% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 4px 15px 0;
  position: relative;
  font-size: 22px;
  font-weight: bold;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  :before{
    content: '';
    background: #54b3d6;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  };
  :hover {
    background-position: 0;
    opacity: .7;
  };
  :hover::before{
    width: 100%;
  }
  &.active {
    opacity: 1;
  }  
  @media (max-width: 450px){
    font-size: 18px;
    padding: 0 5px;
  }
`;
const StyledNavLink = styled(NavLink)`
  display: flex;
  font-size: 22px;
  text-decoration: none;
  margin-right: 20px;
  color: #2884f6;
  @media (max-width: 450px){
    font-size: 18px;
  }
`;