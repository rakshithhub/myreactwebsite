import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Nav = () => {
  return (
    <>
      <NavBar className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Lern Vern
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 navStyle">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/service">
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </NavBar>
    </>
  );
};
const NavBar = styled.nav`
    .navbar-brand{
      padding: 0 1rem;
      color: white;
      background-color: black;
      font-weight: bolder;
      font-size: 2rem;
    }
    .navStyle{
        width: 100%;
        display: flex;
        justify-content: end;
        gap: 3rem;

        .nav-link{
            font-size: 1.2rem;
            transition: all 0.7s;
        
            &:hover{
                color: teal;
            }
        }

    }
    @media (max-width:990px) {
        .navStyle{
        align-items: center;
        gap: 1rem;
}
    }
`;
export default Nav;
