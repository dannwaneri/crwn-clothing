import styled from 'styled-components';


export const ErrorImageOverlay = styled.div`
height: 60vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;


export const ErrorImageContainer = styled.div`
display: inline;
background-image: ${({ imageUrl }) => `url(${imageUrl})`};
background-size: cover;
background-position: center;
width: 40vw;
height: 40vh;
`;

export const ErrorImageText = styled.div`
font-size: 28px;
color:#2f8e89;
`;