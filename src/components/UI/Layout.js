import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useState } from "react";
import GlobalStyle from './GlobalStyle';

import lightTheme from "./themes/light.json";
import darkTheme from "./themes/dark.json";

import Header from "components/Header";
import Footer from "components/Footer";

const Layout = ({ children }) => {
    const [isLight,setIsLight] = useState(true);

    const handleToggleTheme = ()=>{
        setIsLight(!isLight);
    }

    return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
        <Wrapper>
            <GlobalStyle />
            <Header/>
            <Main>{children}</Main>
            <Footer isLight={isLight} handleToggleTheme={handleToggleTheme}/>
        </Wrapper>
    </ThemeProvider>
    );
}

const Wrapper = styled.div``;

const Main = styled.div`
min-height: calc(100vh - 160px);
width: 96%; 
max-width:1240px;
margin: auto;
display : flex;

`;

export default Layout;
