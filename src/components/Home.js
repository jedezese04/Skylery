import { useState, useEffect } from 'react'
import Item from './Item'
import image from '../images/background.jpg'
import styled from 'styled-components'
import { HomeContainer } from './Styles/HomeContainerStyled'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import './Styles/loading.css'

export default function Home() {

    const [listData, setListData] = useState([])
    const [page, setPage] = useState(1)

    async function fetchData() {
        try {
            const {data} = await axios.get(`https://api.pexels.com/v1/search?query=sky&per_page=15&page=${page}`, {
                headers: {
                    Authorization: '563492ad6f91700001000001634135a2ea034c2ab77cb28e59748154'
                }
            })
            setListData([...listData, ...data.photos])
            setPage(page+1)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const [selected, setSelected] = useState(() => {
		const data = localStorage.getItem('selectedData')
		if (data) {
			return JSON.parse(data)
		}
		else {
			return []
		}
	})

    useEffect(() => {
        localStorage.setItem('selectedData', JSON.stringify(selected))
    }, [selected])

    return (
        <InfiniteScroll
            dataLength={listData.length}
            next={fetchData}
            hasMore={true}
            loader={<div
                style={{
                    width: "100%",
                    textAlign: "center"
                }}
            ><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>}
            endMessage={
            <p style={{ textAlign: "center" }}>
                <b>Sorry! You have seen it all</b>
            </p>
            }
        >
            <HomeContainer>
                {listData.map((item, i) => {
                    return (
                        <Item
                            selected={selected}
                            setSelected={setSelected}
                            mode="home"
                            src={item.src.portrait}
                            name={item.photographer}
                            key={i}
                        />
                    )
                })}
            </HomeContainer>
        </InfiniteScroll>
    )
}
