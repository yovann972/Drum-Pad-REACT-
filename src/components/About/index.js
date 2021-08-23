import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
    <Wrapper>
        <h1>About page</h1>

        <h4>Framework</h4>
        <p>This app build with REACT</p>

        <h4>Libraries</h4>
        <ul>
            <li>Styled Components</li>
            <li>React Router Dom</li>
            <li>Tonejs</li>
        </ul>
        
    </Wrapper>
    );
}

const Wrapper = styled.div`

h4 {
   font-size: 1.2rem;
   font-weight:bold;
   padding: 2px;
   margin-top: 20px;
   margin-bottom:10px;
}

li {
    margin: 5px;
}

`;


export default About;