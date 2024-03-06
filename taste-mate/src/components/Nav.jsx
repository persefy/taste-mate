import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { BASE_URL } from "../globals"
import axios from "axios"


export default function Nav () {

    const [categories, setCategories] = useState([])
    const [selectedCategoty, setSelectedCategory] = useState(null)

    useEffect(() => {
        const getCategories = async () => {
            const response = await axios.get(`${BASE_URL}categories.php`)
            //console.log(response.data.categories)

            setCategories(response.data.categories)
        }
      
        getCategories()
      }, [])
      console.log(categories)
    return (
        <div>
            {categories.map((category) => (
                <Link to={`/category/${category.strCategory}`}>{category.strCategory}</Link>
            ) )}
        
        
        <Link to="/">Home</Link>
        <Link to="/category/:name">Category</Link>
        <Link to="/searchResults/:name">Search</Link>

        
        </div>

    )
}