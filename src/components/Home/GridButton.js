import React from 'react';
import styled from 'styled-components';

const GridButton = ({ isPlayed = false, soundPlay,id, handleSampleChange}) => {
    return (
        <Wrapper isPlayed = {isPlayed} onClick={soundPlay}>
            <label onClick={e=>e.stopPropagation()} htmlFor={id}>♫</label>
            <input onClick={e=>e.stopPropagation()} id={id} type="file" onChange={handleSampleChange}/>
        </Wrapper>
    )
}

const Wrapper= styled.div`
border-radius: 4px;
background-color: rgba(63,94,251,100);
background : radial-gradient(
    circle,
    rgba(255,250,180,100) 33%, 
    rgba(226,180,155,100)100%
);

position: relative;
overflow: hidden;

&::before {
    position: absolute;
    content: "";
    top: 0;
    right:0;
    bottom:0;
    left:0;
    z-index : 0;
    background : radial-gradient(
        circle,
        rgba(251,239,63,100) ${props=>props.isPlayed ? "25%" : "15%"}, 
        rgba(252,70,70,100)100%
        );
    opacity : ${props=>(props.isPlayed ? "1" : "0")};
    transition: linear 0.2s;
    }
&:hover::before {
    opacity: 1;
    }

&:active::before {
    opacity: 1;
    background : radial-gradient(
        circle,
        rgba(251,239,63,100) 35%, 
        rgba(252,70,70,100)100%
        );
    }

& input{
    display: none;
}

& label{
    color:#fff;
    position: absolute;
    right: 12px;
    top: 12px;
    font-size: 24px;
    cursor:pointer;
}

`;

/* Active
radial-gradient(circle,rgba(251,239,63,100) 23%, rgba(252,70,70,100)100%) */

export default GridButton;
