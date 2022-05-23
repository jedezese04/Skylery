import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Description, JumbotronContainer, Shadow, Title } from './Styles/JumbotronStyled'
import backgroundImage from "../images/background.jpg"

const BackgroundImage = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`

export default function Jumbotron() {
    return (
        <JumbotronContainer>
            <Shadow>
                <BackgroundImage src={backgroundImage} />
                <Title>SKYLERY</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Description>
            </Shadow>
        </JumbotronContainer>
    )
}