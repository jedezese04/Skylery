import styled from 'styled-components'
import { useRef, useState, useEffect } from 'react'
import { ItemBottom, ItemContainer, ItemImageContainer, ItemImage, ItemTitle, ItemFunction } from './Styles/ItemStyled'

export default function Item({ mode, src, name, id, selected, setSelected }){

    const bottomRef = useRef()

    function showBottom() {
        bottomRef.current.style.bottom = 0
    }
    function hideBottom() {
        bottomRef.current.style.bottom = "-100px"
    }

    function addHandler() {
        setSelected([{
            id: new Date().getTime(),
            src,
            name
        }, ...selected])
    }

    const [deletedData, setDeletedData] = useState(() => {
		const data = localStorage.getItem('selectedData')
		if (data) {
			return JSON.parse(data)
		}
		else {
			return []
		}
	})

    useEffect(() => {
        localStorage.setItem('selectedData', JSON.stringify(deletedData))
    }, [deletedData])

    const itemContainerRef = useRef()

    function deleteHandler() {
        let data = localStorage.getItem('selectedData')
        data = JSON.parse(data)
        let newData = data.filter(item => item.id !== id)
        setDeletedData(newData)
        itemContainerRef.current.style.display = "none"
    }

    return (
        <ItemContainer
            onMouseOver = {showBottom}
            onMouseOut = {hideBottom}
            ref = {itemContainerRef}
        >
            <ItemImageContainer>
                <ItemImage src={src} />
            </ItemImageContainer>
            <ItemBottom ref={bottomRef}>
                <ItemTitle>{name}</ItemTitle>
                {
                    mode === "home"
                    ? (<ItemFunction
                            onClick={addHandler}
                        ><i className="fas fa-plus"></i></ItemFunction>)
                    : (<ItemFunction
                            onClick={deleteHandler}
                        ><i className="fas fa-trash"></i></ItemFunction>)
                }
            </ItemBottom>
        </ItemContainer>
    )
}
