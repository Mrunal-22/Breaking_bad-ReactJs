import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import Pagination from 'components/pagination'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPageUrl, setCurrentPageUrl] = useState(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [query, setQuery] = useState('')



    useEffect(() => {
            const fetchItems = async() => {
                setIsLoading(true)
                const result = await axios(
                    `https://www.breakingbadapi.com/api/characters?name=${query}`
                )

                // console.log(result.data)

                setItems(result.data)
                setIsLoading(false)

            }

            fetchItems()
        }, [query]) //

    return ( <
        div className = 'container' >
        <
        Header / >
        <
        Search getQuery = {
            (q) => setQuery(q) }
        /> <
        CharacterGrid isLoading = { isLoading }
        items = { items }
        /> <
        /div>
    )
}

export default App