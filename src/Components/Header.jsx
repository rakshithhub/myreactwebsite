import { styled } from 'styled-components';
import Nav from './Nav'

const Header = () => {
  return (
    <>
      <MainHeader>
        <Nav/>
      </MainHeader>
    </>
  )
};
const MainHeader = styled.header`
  padding: 0 2rem;
  min-height: 5rem;
  background-color: ${({theme}) => theme.colors.bg};
`;

export default Header