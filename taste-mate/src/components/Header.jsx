import Nav from "./Nav"
import SearchBar from "./SearchBar"

export default function Header () {
    return (
        <div>
            <header>
                <SearchBar/>
                <h1>Taste-Mate</h1>
                <Nav/>
            </header>
        </div>
    )
}