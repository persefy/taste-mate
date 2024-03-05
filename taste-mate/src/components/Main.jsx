import { Route, Routes } from 'react-router-dom'
import Category from './Category'
import SearchResults from './SearchResults'
import MealDetails from './MealDetails'
import Home from './Home'

export default function Main () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/category/:name' element={<Category/>}/>
                <Route path='searchResults/:name' element={<SearchResults/>}/>
                <Route path='meal/:id' element={<MealDetails/>}/>
            </Routes>
        </div>
    )
}