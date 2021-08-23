import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
    <Wrapper>
        <h1>Our super music app</h1>
        <nav>
            <Link to="/">
                <MenuEl isCurrentPage={location.pathname === "/"}>Home</MenuEl>
            </Link>
            <Link to="/About">
                <MenuEl isCurrentPage={location.pathname === "/About"}>About</MenuEl>
            </Link>
        </nav>
    </Wrapper>
    );
};

const Wrapper = styled.header`
    height: 80px;
    display: flex; 
    justify-content : space-between;
    padding:0px 24px;
    align-items: center;
    & a {
        text-decoration: none;
        color: inherit;
    }
    & a:first-child{
        margin-right: 12px;
    }
`;

const MenuEl = styled.a`
    font-size: 18px;
    padding-bottom:2px;
    border-bottom: solid 2px ${props=>props.isCurrentPage ? "":"transparent"};
    &:hover{
        border-bottom: solid 2px;
    }
`;
export default Header;
