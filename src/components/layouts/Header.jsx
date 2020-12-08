import React from 'react'
import styled from "styled-components";
import {device} from '../../device'

const Header = () => {
    return (
        <HeaderContainer>
            <div className="content">
                <h1>Write Your Story,</h1>
                <span>Share your ideas.</span>
            </div>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.header`
  background: url(../../assets/flower3.jpg) no-repeat center/cover;
  height: 25rem;
  position: relative;

  .content {
    margin: 0 auto;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 1.2;
  }

  h1 {
    color: #ffff;
    font-weight: 400;
    font-size: 3rem;
  }

  .content span {
    color: #f5a8a8;
    font-size: 2rem;
  }

  @media ${device.tablet} {
    height: 15rem;

    h1 {
      font-weight: 400;
      font-size: 1.5rem;
    }

    .content span {
      font-size: 1rem;
    }
  }
`;
