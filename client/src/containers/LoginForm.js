const LoginForm = ( { loggedIn, onLoginClicked } ) => {


    const handleClick = () => {
        loggedIn = !loggedIn;
        onLoginClicked(loggedIn);
    }


    return (
        <div className="login">
            <h3>This is the login page for the customer.</h3>
            <br></br>
            <h4>Currently {loggedIn && "Logged in, so you can "}{!loggedIn && "Logged out, so you can "}
            <button type="button" onClick={ handleClick } >{loggedIn && "Logout"}{!loggedIn && "Login"}</button>
            </h4>
            
        </div>
    );
}

export default LoginForm;