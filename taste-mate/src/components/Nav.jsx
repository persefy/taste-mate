import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { BASE_URL } from "../globals"
import axios from "axios"


export default function Nav () {

    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        const getCategories = async () => {
            const response = await axios.get(`${BASE_URL}categories.php`)
            //console.log(response.data.categories)

            setCategories(response.data.categories)
        }
      
        getCategories()
      }, [])


      // Function to handle hover event on "Recipes" category
    const handleRecipesHover = () => {
        setSelectedCategory("Recipes")
    }

    // Function to handle mouse leave event
    const handleMouseLeave = () => {
        setSelectedCategory(null)
    }

    return (
        <div className="nav-menu">
        {/* <Link to="/">Home</Link> */}
        
        <div className="recipes" onMouseEnter={handleRecipesHover} onMouseLeave={handleMouseLeave}>
            <Link to="/" className="recipes-link">Recipes</Link>

            {selectedCategory === "Recipes" && (
                <div className="submenu">
                
                    <div className="submenu-row">
                        <h2>Meat</h2>
                        <div>
                            <h3><Link to="/category/Chicken">Chicken</Link></h3>
                            <h3><Link to="/category/Beef">Beef</Link></h3>
                            <h3><Link to="/category/Pork">Pork</Link></h3>
                            <h3><Link to="/category/Seafood">Seafood</Link></h3>
                            <h3><Link to="/category/Lamb">Lamb</Link></h3>
                            <h3><Link to="/category/Goat">Goat</Link></h3>
                        </div>
                    </div>
                    <div className="submenu-row">
                        <h2>Meals</h2>
                        <div>
                            <h3><Link to="/category/Breakfast">Breakfast</Link></h3>
                            <h3><Link to="/category/Dessert">Dessert</Link></h3>
                            <h3><Link to="/category/Side">Side</Link></h3>
                            <h3><Link to="/category/Starter">Starter</Link></h3>
                        </div>
                    </div>
                    <div className="submenu-row">
                        <h2>Dietary</h2>
                        <div>
                            <h3><Link to="/category/Vegetarian">Vegetarian</Link></h3>
                            <h3><Link to="/category/Vegan">Vegan</Link></h3>
                        </div>
                    </div>
                    <div className="submenu-row">
                        <h2>Other</h2>
                        <div>
                            <h3><Link to="/category/Pasta">Pasta</Link></h3>
                            <h3><Link to="/category/Miscellaneous">Miscellaneous</Link></h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
        {/* {categories.map((category) => (
            <Link to={`/category/${category.strCategory}`} key={category.strCategory}>{category.strCategory} </Link>
        ))} */}
    </div>
)
}