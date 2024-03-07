
import { Route, Routes, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Category from './Category'
import Home from './Home'
import SearchResults from './SearchResults'
import MealDetails from './MealDetails'


export default function Main () {

    return (
        <div className="Main">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route exact path='/category/:category' element={<Category/>}/>      
                <Route path='searchResults/:name' element={<SearchResults/>}/>
                <Route path='/category/:category/:id' element={<MealDetails/>}/>
            </Routes>
        </div>
    )
}