import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Luca's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create new post</Link>
            </div>
        </nav>
    )
}

export default Navbar;