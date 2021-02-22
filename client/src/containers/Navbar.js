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

export default Navbar;