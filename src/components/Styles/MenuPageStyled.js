import styled from "styled-components";
import { NavLink } from "react-router-dom";

export let MenuContainer = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export let Button = styled(NavLink)`
    font-size: clamp(22px, 1.5vw, 24px);
    padding: 10px 12px;
    border-radius: 5px;
    outline: none;
    color: #29675c;
    background-color: "none";
    border: 2px solid #29675c;
    transition: 0.5s;
    text-decoration: none;
    margin: 0 15px;
`