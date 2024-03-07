import Nav from "./Nav"
import SearchBar from './SearchBar'
import { Link } from "react-router-dom"


export default function Header () {
    return (
        <div>
            <header className="Header">
                <div className="name-searchbar-container">
                    <div className="logo-container">
                        <Link to="/" className="logo">TasteMate</Link>
                    </div>
                    <div className="header-row2">
                        <div className="search-bar-container">
                            <SearchBar/>
                        </div>
                        <div className="saved-recipes">
                            <img className="bookmark-icon" src="src/assets/images/Bookmark_fill.png"/>
                            <span className="saved-recipes-text">Saved Recipes</span>
                        </div>
                        <img className="user-icon" src="src/assets/images/User_alt_fill.png"/>
                    </div>
                </div>
               
                <div className="nav-container">
                    <Nav/>         
                </div>
            </header>
        </div>
    )
}