import Nav from "./Nav"
import SearchBar from './SearchBar'
import { Link } from "react-router-dom"


export default function Header () {
    return (
        <div>
            <header className="Header">
                <div className="name-searchbar-container">
                    <Link to="/" className="logo">TasteMate</Link>
                    <SearchBar/>
                    <div className="saved-recipes">
                        <img className="bookmark-icon" src="src/assets/images/Bookmark_fill.png"/>
                        <span className="saved-recipes-text">Saved Recipes</span>
                    </div>
                    <img className="user-icon" src="src/assets/images/User_alt_fill.png"/>
                </div>
               
                <div className="nav-container">
                    <Nav/>         
                </div>
            </header>
        </div>
    )
}