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
            console.log(response.data.categories)
        }
      
        getCategories()
      }, [])
    return (
        <div>
        {/* // <Link to="/">Home</Link>
        // <div className="hamburger">&#9776;</div>
        // <div className="categories"></div> */}

        {/* sidebar code  */}
        {/* <h2>Categories</h2>
        <p>Meat</p>
        <p>Meal Type</p>
        <p>Vegetarian</p>
        <p>Other</p>
        <Link to="/category/Beef">Beef</Link> */}
        
        

        
        </div>

    )
}