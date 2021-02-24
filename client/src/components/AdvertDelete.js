import { useParams, useLocation, useHistory } from "react-router-dom";

const AdvertDelete = () => {

    // This function doesn't do very much - just informs user that
    // their advert has been deleted, and to allow them to press continue.

    // Grab CUSTOMER data passed in from UserArea.js container
    const { id } = useParams();
    const data = useLocation();
    const history = useHistory();

    const handleClick = (ev) => {
        ev.preventDefault(); // prevent the page from refreshing
        
        // Take the user back to their area
        history.push("/user");

    }
 

    return (

        <div className="ad-form">
            <h3>Your advert has been deleted.</h3>
            <br></br>
            <button onClick={handleClick}>Click To Continue</button> 
        </div>
    );
}

export default AdvertDelete;