import { useParams, useLocation } from "react-router-dom";

const UpdateCarAdvert = () => {

    console.log("Path: Inside UpdateCarAdvert.js");


    const { id } = useParams();
    const data = useLocation();
    // const { state } = useLocation();

    console.log("Location PATHNAME: " + JSON.stringify(data.state));
    console.dir("Location MY DATA: " + data.state["title"]);
    // console.dir("Location STATE: " + state)

    // data.state["title"] = "Does it change?";



    console.log("Paramater from CustAdvertSummary Link: " + id);



    const handleSubmit = (ev) => {
        ev.preventDefault();
        
        console.log("Update To Be Submitted");

    }


    return (
        <form className="stock-form" onSubmit={handleSubmit}>

            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" value={data.state["title"]}/>

            <label htmlFor="description">Description: </label>
            <input type="text" id="description" name="description" value={data.state["description"]} />

            <label htmlFor="make">Make: </label>
            <input type="text" id="make" name="make" value={data.state["make"]}/>

            <label htmlFor="model">Model: </label>
            <input type="text" id="model" name="model" value={data.state["model"]}/>

            <label htmlFor="registration">Registration Year: </label>
            <input type="text" id="registration" name="registration" value={data.state["regYear"]}/>

            <label htmlFor="seats">Seats: </label>
            <input type="text" id="seats" name="seats" value={data.state["numSeats"]}/>

            <label htmlFor="doors">Doors: </label>
            <input type="text" id="doors" name="doors" value={data.state["numDoors"]}/>

            <label htmlFor="colour">Colour: </label>
            <input type="text" id="colour" name="colour" value={data.state["colour"]}/>

            <label htmlFor="price">Price: </label>
            <input type="text" id="price" name="price" value={data.state["price"]}/>

            <input
                type="submit"
                value="Update"
                
            />

        </form>
    );
}

export default UpdateCarAdvert;