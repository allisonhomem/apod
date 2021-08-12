import React from 'react';
import LearnMore from './LearnMore.js';
import styled from 'styled-components';
import theme from './theme/index.js';

const StyledBody = styled.div `
display: flex;
flex-direction: column;
`;

const StyledWebTitle = styled.h1 `
text-align: left;
text-transform: uppercase;
text-shadow: 1px 1px ${pr => pr.theme.redColor};
margin: 3% 0;
padding-left: 1%;
`;

const StyledPod = styled.img `
width: 100%;
height: 70vh;
object-fit: cover;
`;

const StyledNameContainer = styled.div `
display: flex;
align-items: baseline;
justify-content: space-between;
padding: 0 2%;
`;

const StyledPicName = styled.h2 `
line-height: 1.3rem;
letter-spacing: 3px;
text-shadow: 2px 2px ${pr => pr.theme.blueColor};
`;

const StyledPhotographer = styled.p `
font-size: .9rem;
`;


function Body(props){
    const { apodData } = props;

    return(
        <StyledBody theme={theme}>
            <StyledWebTitle theme={theme}> Astronomy Picture of the Day </StyledWebTitle>
            <StyledPod theme={theme} src={apodData.hdurl} alt='Pic of Day'></StyledPod>
            <StyledNameContainer theme={theme}>
                <StyledPicName theme={theme}>{apodData.title}</StyledPicName>
                <StyledPhotographer theme={theme}>Photographed by: {apodData.copyright}</StyledPhotographer>
            </StyledNameContainer>
            
            <LearnMore explain={apodData.explanation} />
        </StyledBody>
    )
};

export default Body;