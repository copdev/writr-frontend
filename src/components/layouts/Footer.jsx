import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
      <FooterContainer>
        <span>&copy;{new Date().getFullYear()} All Rights Reserved.</span><br/>
        <span className="author">Glover.</span>
      </FooterContainer>
    );
}

export default Footer; 


const FooterContainer = styled.footer`
  background: rgba(241, 236, 236, 0.171);
  height: 4rem;
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;

  .author {
    font-family: "Cedarville Cursive", cursive;
  }
`;
