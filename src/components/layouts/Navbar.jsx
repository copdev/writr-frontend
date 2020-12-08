import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {device} from '../../device'

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 64) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground);

    return (
      <NavContainer>
        <div className={navbar ? "navbar active" : "navbar"}>
          <div className='logo'>
            Writ<span>r.</span>{" "}
          </div>
          <nav className='links'>
            <Link to="/add-article">
              <i className="fas fa-plus-circle add"></i>
            </Link>
          </nav>
        </div>
      </NavContainer>
    );
}

export default Navbar;

const NavContainer = styled.header`
  .navbar {
    background: rgba(7, 7, 7, 0.322);
    height: 4rem;
    width: 100vw;
    padding: 0 7rem;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
  }

  .active {
    background: linear-gradient(
      90deg,
      rgb(66, 2, 194) 0%,
      rgb(0, 78, 194) 100%
    );
  }

  .logo {
    font-size: 2rem;
    font-family: "Cedarville Cursive", cursive;
  }

  .logo span {
    color: #f5a8a8;
    font-family: "Cedarville Cursive", cursive;
  }

  .links {
    align-items: center;
    display: inline-flex;
  }

  .add {
    font-size: 2rem;
    color: #fff;
  }

  @media ${device.tablet} {
    .navbar {
      height: 3rem;
      width: 100vw;
      padding: 0 .7rem;
    }
  }
`;
