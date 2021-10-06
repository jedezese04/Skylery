import styled from 'styled-components'

export let ItemContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`

export let ItemImageContainer = styled.div`
    width: 100%;
    height: 100%;
`

export let ItemImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`

export let ItemBottom = styled.div`
    width: 100%;
    position: absolute;
    bottom: -100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: white;
    transition: 0.25s;
`

export let ItemTitle = styled.h4`
    font-weight: 400;
    font-size: 23px;
    color: black;
`

export let ItemFunction = styled.button`
    font-size: 16px;
    color: #29675c;
    padding: 5px 7px;
    background-color: white;
    border: 2px solid #29675c;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: #29675c;
        color: white;
    }
`