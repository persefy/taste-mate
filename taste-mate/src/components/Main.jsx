
import { Route, Routes, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Category from './Category'
import Home from './Home'
import SearchResults from './SearchResults'
import MealDetails from './MealDetails'


export default function Main () {

    
//     const [categories, setCategories] = useState([])
//     const [selectedCategoty, setSelectedCategory] = useState(null)
//   // this should be a single movie object once you've select one

//   useEffect (() => {
//     const getCategories = async () => {
//       const response = await axios.get(`${BASE_URL}categories.php`)
//       setCategories(response.data)
//     }
//     getMovies()
//   }, [])


    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route exact path='/category/:category' element={<Category/>}/>      
                <Route path='searchResults/:name' element={<SearchResults/>}/>
                <Route path='/category/:category/:id' element={<MealDetails/>}/>
            </Routes>
        </div>
    )
}