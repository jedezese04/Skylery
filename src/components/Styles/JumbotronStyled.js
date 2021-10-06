import styled from "styled-components";
import backgroundUrl from '../../images/background.jpg'

export let JumbotronContainer = styled.div`
    width: 100%;
    height: 80vh;
    /* background-image: url(${backgroundUrl});
    background-position: 87% 50%;
    background-attachment: fixed; */
    position: relative;
`

export let Description = styled.p`
    color: white;
    width: 40%;
    font-size: clamp(20px, 1.5vw, 24px);
    margin-top: 15px;
    text-align: center;
    @media only screen and (max-width: 490px) {
        &{
            display: none;
        }
    }
`
export let Title = styled.h2`
    color: white;
    font-weight: 300;
    font-size: clamp(45px, 4vw, 80px);
    border-bottom: 3px solid white;
`
export let Shadow = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`