import React, { useState } from 'react';
import styled from 'styled-components';
import theme from './theme/index.js';

const StyledButton = styled.button `
font-family: ${pr => pr.theme.fontMain};
color: ${pr => pr.theme.darkColor};
background-color: ${pr => pr.theme.lightColor};
font-size: 1.2rem;

&:hover {
    background-color: ${pr => pr.theme.blueColor};
}
`;

const StyledExplain = styled.p `
text-align: justify;
padding: 0 4%;
`;

function LearnMore(props){
    const { explain } = props;
    const [ disabledButton, setDisabledButton] = useState(true);

    const clicky = () => {
        setDisabledButton(false);
    };


    return(
        <div>
          {disabledButton && <StyledButton theme={theme} onClick={clicky}> Learn More </StyledButton>}
          {!disabledButton && <StyledExplain theme={theme}> {explain} </StyledExplain>}
        </div>
    )
}

export default LearnMore;