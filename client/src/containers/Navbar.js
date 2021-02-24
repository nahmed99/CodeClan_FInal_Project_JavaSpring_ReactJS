import { Link } from 'react-router-dom';

const Navbar = ({loggedIn}) => {
    return (
        <nav className="navbar">
            <h1>Do It Your-SELL IT!</h1>
            <div className="links">
                <Link to="/">Home</Link>

                {!loggedIn && <Link to="/login" style={{
                    color: "darkblue",
                    backgroundColor: "powderblue",
                    border: "solid lightred 1px",
                    borderRadius: "5px"
                }}>Login</Link>}
                
                {loggedIn && <Link to="/user">User Area</Link>}

                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;


/*

The following is for REFERENCE only - the way you could access the 'server' for the specified URL (the anchor tags have been replaced by Link tags in the code above - these intercept the requests for new pages/erfreshes, and the href tags have been replaced by "to"):


const Navbar = ({loggedIn}) => {
    return (
        <nav className="navbar">
            <h1>Do It Your-SELL IT!</h1>
            <div className="links">
                <a href="/">Home</a>

                {!loggedIn && <a href="/login" style={{
                    color: "darkblue",
                    backgroundColor: "powderblue",
                    borderRadius: "5px"
                }}>Login</a>}
                
                {loggedIn && <a href="/user">User Profile</a>}

                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
}



*/