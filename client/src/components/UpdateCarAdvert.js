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
        <form className="ad-form" onSubmit={handleSubmit}>

            <label htmlFor="title">Title: </label>
            <textarea type="text" id="title" name="title" value={data.state["title"]}
            required />

            <label htmlFor="description">Description: </label>
            <textarea type="text" id="description" name="description" value={data.state["description"]} required />

            <label htmlFor="make">Make: </label>
            {/* <input type="text" id="make" name="make" value={data.state["make"]}required /> */}
            <select required >
                <option selected="selected">{data.state["make"]}</option>
                <option value="audi">Audi</option>
                <option value="ford">Ford</option>
                <option value="toyota">Toyota</option>
                <option value="vauxhall">Vauxhall</option>
                <option value="volkswagon">Volkswagon</option>
            </select>

            <label htmlFor="model">Model: </label>
            <input type="text" id="model" name="model" value={data.state["model"]} required />

            <label htmlFor="registration">Registration Year: </label>
            <input type="text" id="registration" name="registration" value={data.state["regYear"]} required />

            <label htmlFor="seats">Seats: </label>
            <input type="text" id="seats" name="seats" value={data.state["numSeats"]} required />

            <label htmlFor="doors">Doors: </label>
            <input type="text" id="doors" name="doors" value={data.state["numDoors"]} required />

            <label htmlFor="colour">Colour: </label>
            <input type="text" id="colour" name="colour" value={data.state["colour"]} required />

            <label htmlFor="price">Price: </label>
            <input type="text" id="price" name="price" value={data.state["price"]} required />

            <input
                type="submit"
                value="Update"
                
            />

        </form>
    );
}

export default UpdateCarAdvert;