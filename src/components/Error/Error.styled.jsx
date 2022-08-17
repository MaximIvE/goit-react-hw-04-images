import styled from 'styled-components';


export const Wrapper = styled.div`
position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: calc(300px + 50% * 0.8);
    height: auto;
`;