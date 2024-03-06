import SearchBar from "./SearchBar"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import DataContext from "../DataContext"
import { useEffect, useContext } from 'react'
import { BASE_URL } from '../globals'
import { useParams } from 'react-router-dom'

export default function SearchResults () {

    const { searchMealQuery, setSearchMealQuery } = useContext(DataContext);
    // let { name } = useParams()
    useEffect(() => {
        const getMealResults = async ()  => {
            const response = await axios.get(`${BASE_URL}/search.php?s=${searchMealQuery}`)
            //const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=beef`)
            
            console.log(response.data.meals)
        } 
            getMealResults()
    }, [])

    return (
        <div>
            {searchMealQuery}
        </div>
    )
}