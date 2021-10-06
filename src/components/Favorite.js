import React from 'react'
import Item from './Item'
import styled from 'styled-components'
import image from '../images/background.jpg'
import { useState } from 'react'

const FavoriteContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 960px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 590px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 490px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export default function Favorite() {

    const [selectedImages, setSelectedImages] = useState(() => {
        const data = localStorage.getItem('selectedData')
        if(data) {
            return JSON.parse(data)
        } else {
            return []
        }
    })

    return (
        <FavoriteContainer>
            {selectedImages.map((item, i) => {
                return (
                    <Item
                        id = {item.id}
                        mode = "favorite"
                        src = {item.src}
                        key = {i}
                        name = {item.name}
                    />
                )
            })}
        </FavoriteContainer>
    )
}
