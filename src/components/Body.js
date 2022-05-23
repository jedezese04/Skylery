import { useState, useContext, useEffect } from 'react'
import { Route, Router, Switch } from 'react-router'
import Favorite from './Favorite'
import Home from './Home'
import { MenuPage } from './MenuPage'
import { BodyContainer } from './Styles/BodyContainerStyled'

export default function Body() {
    return (
        <BodyContainer>
            <div style={{
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                <MenuPage />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/favorite">
                        <Favorite />
                    </Route>
                </Switch>
            </div>
        </BodyContainer>
    )
}