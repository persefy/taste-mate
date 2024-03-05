import { Link } from "react-router-dom"

export default function Nav () {
    return (
        <div>
        <Link to="/">Home</Link>
        <Link to="/category/:name">Category</Link>
        <Link to="searchResults/:name">Search</Link>

        
        </div>

    )
}