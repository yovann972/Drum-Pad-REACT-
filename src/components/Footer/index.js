import React from 'react';
import styled from 'styled-components';

const Footer = ({ isLight, handleToggleTheme }) => {
    return (
    <Wrapper>
        <button onClick={handleToggleTheme}>
            Switch to {isLight ? "dark" : "light"} theme
        </button>
    </Wrapper>
    );
}

const Wrapper = styled.footer`
height: 80px;
display: flex;
justify-content : center;
align-items: center;
background-color : ${props=>props.theme.mainColor};
`;

export default Footer;
