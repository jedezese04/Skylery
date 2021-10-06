import { useState, useRef, useEffect } from "react"
import { Button, MenuContainer } from "./Styles/MenuPageStyled"

const activeStyled = {
    color: "white",
    backgroundColor: "#29675c"
}

export const MenuPage = () => {

    return (
        <MenuContainer>
            <Button
                exact
                to="/"
                activeStyle={activeStyled}
            >Home</Button>
            <Button
                to="/favorite"
                activeStyle={activeStyled}
            >Favorite</Button>
        </MenuContainer>
    )
}
