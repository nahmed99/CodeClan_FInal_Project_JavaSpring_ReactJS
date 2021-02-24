import { useState } from "react";

const LoginForm = ( { loggedIn, onLoginClicked } ) => {

    const [user, setUser] = useState(0);

    const handleClick = () => {
        loggedIn = !loggedIn;
        onLoginClicked(loggedIn, user);
    }


    return (
        <div className="login-form">
            <h3>This is the login page for the customer.</h3>
            <br></br>
            <h4>Currently {loggedIn && "Logged in, so you can "}{!loggedIn && "Logged out, so you can "}
            {!loggedIn && <select required defaultValue="User" onChange={(e) => setUser(e.target.value)}>
                <option>Select User</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> }
            <button type="button" onClick={ handleClick } >{loggedIn && "Logout"}{!loggedIn && "Login"}</button>
            </h4>
            
        </div>
    );
}

export default LoginForm;



