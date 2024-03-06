import axios from "axios"
import SearchBar from "./SearchBar"
import DataContext from "../DataContext"
import { useEffect, useContext, useState } from 'react'
import { BASE_URL } from '../globals'
import { useParams, useNavigate } from 'react-router-dom'

export default function SearchResults () {

    const { searchMealQuery, setSearchMealQuery } = useContext(DataContext);
    // let { name } = useParams()
    // let searchMealQueryStr = 'chicken'
    const[searchQuery,setSearchQuery]=useState(searchMealQuery)


    useEffect(() => {
        const getMealResults = async ()  => {
            console.log(searchQuery)
            //const response = await axios.get(`${BASE_URL}search.php?s=${searchMealQueryStr}`)
        
            const response = await axios.get(`${BASE_URL}search.php?s=${searchQuery}`)
            //const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=beef`)
            
            console.log(response.data.meals)
        } 
            getMealResults()
    }, [])

    return (
        <div>
            <h4>Results for {searchQuery}</h4>
        </div>
    )
}
