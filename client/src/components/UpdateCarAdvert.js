import { useState } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { getCarAdvert, updateCarAdvert } from '../services/CarService';


const UpdateCarAdvert = () => {

    console.log("Path: Inside UpdateCarAdvert.js");


    // Grab data passed in from CustomerAds container
    const { id } = useParams();
    const data = useLocation();
    // const { state } = useLocation(); this workds too!

    
    // Set up state variables to handle any changes made to the form
    const [title, setTitle] = useState(data.state["title"]);
    const [description, setDescription] = useState(data.state["description"]);
    const [make, setMake] = useState(data.state["make"]);
    const [model, setModel] = useState(data.state["model"]);
    const [regYear, setRegYear] = useState(data.state["regYear"]);
    const [transmission, setTransmission] = useState(data.state["transmission"]);
    const [numSeats, setNumSeats] = useState(data.state["numSeats"]);
    const [numDoors, setNumDoors] = useState(data.state["numDoors"]);
    const [colour, setColour] = useState(data.state["colour"]);
    const [price, setPrice] = useState(data.state["price"]);
    const [carAdvert, setCarAdvert] = useState([]);


    console.log("This is what the data looks like: " + JSON.stringify(data.state));
    
// data.state["title"] = "Does it change?"; YEs it did change!!!


    const handleSubmit = (ev) => {
        
        ev.preventDefault(); // prevent the page from refreshing

        // Get the advert that we are to update (the data that 
        // we have been using in this function comes from the
        // CUSTOMER TABLE!!! So we need to retrieve the data 
        // from CarAdvert, and then update that and send back!


        let newCarAdvert;

        getCarAdvert(data.state["id"])
        .then((advert) => {
            newCarAdvert = advert;
            setCarAdvert(advert);
        // console.log(advert);
        })


        // Set the new value(s)
        carAdvert["title"] = title;
        carAdvert.description = description;
        carAdvert.make = make;
        carAdvert.model = model;
        carAdvert.regYear = regYear;
        carAdvert.transmission = transmission;
        carAdvert.numSeats = numSeats;
        carAdvert.numDoors = numDoors;
        carAdvert.colour = colour;
        carAdvert.price = price;

        // data.state["title"] = title;
        // data.state["description"] = description;
        // data.state["make"] = make;
        // data.state["model"] = model;
        // data.state["regYear"] = regYear;
        // data.state["transmission"] = transmission;
        // data.state["numSeats"] = numSeats;
        // data.state["numDoors"] = numDoors;
        // data.state["colour"] = colour;
        // data.state["price"] = price;

       // Update the advert
       
       updateCarAdvert(carAdvert)
       .then((respData) => {
            console.log(respData);
      })


        // This is how you could probably set up the new Advert:
        // *****************************************************

        // const id = data.state["id"];
        // const category = data.state["category"];
        // const cost = data.state["cost"];
        //  ¦
        //  ¦
        // const updatedAdvert = {id, category, title, description, cost, make, model, regYear, numSeats, numDoors, colour, price};
        //


    }


    return (


        <form className="ad-form" onSubmit={handleSubmit}>

        <label htmlFor="title">Title: </label>
        <textarea type="text" id="title" name="title" value={title}
        required onChange={(e) => setTitle(e.target.value)}/>

        <label htmlFor="description">Description: </label>
        <textarea type="text" id="description" name="description" value={description} required  onChange={(e) => setDescription(e.target.value)}/>

        <label htmlFor="make">Make: </label>
        <select required >
            <option selected="selected"  onChange={(e) => setMake(e.target.value)}>{make}</option>
            <option value="audi">Audi</option>
            <option value="ford">Ford</option>
            <option value="jaguar">Jaguar</option>
            <option value="toyota">Toyota</option>
            <option value="vauxhall">Vauxhall</option>
            <option value="volkswagon">Volkswagon</option>
        </select>

        <label htmlFor="model">Model: </label>
        <input type="text" id="model" name="model" value={model} required onChange={(e) => setModel(e.target.value)}/>

        <label htmlFor="registration">Registration Year: </label>
        <input type="number" min="1900" max="2029" step="1" id="registration" name="registration" value={regYear} required onChange={(e) => setRegYear(e.target.value)}/>

        <label htmlFor="make">Transmission: </label>
        <select required >
            <option selected="selected"  onChange={(e) => setTransmission(e.target.value)}>{transmission}</option>
            <option value="manual">MANUAL</option>
            <option value="automatic">AUTOMATIC</option>
        </select>

        <label htmlFor="seats">Seats: </label>
        <input type="number" id="seats" name="seats" value={numSeats} required onChange={(e) => setNumSeats(e.target.value)}/>

        <label htmlFor="doors">Doors: </label>
        <input type="number" id="doors" name="doors" value={numDoors} required onChange={(e) => setNumDoors(e.target.value)}/>

        <label htmlFor="colour">Colour: </label>
        <input type="text" id="colour" name="colour" value={colour} required onChange={(e) => setColour(e.target.value)}/>

        <label htmlFor="price">Price: </label>
        <input type="number" id="price" name="price" value={price} required onChange={(e) => setPrice(e.target.value)}/>

        <button>Update</button>
        {/* <input
            type="submit"
            value="Update"  
        /> */}

    </form>



        // <form className="ad-form" onSubmit={handleSubmit}>

        //     <label htmlFor="title">Title: </label>
        //     <textarea type="text" id="title" name="title" value={data.state["title"]}
        //     required />

        //     <label htmlFor="description">Description: </label>
        //     <textarea type="text" id="description" name="description" value={data.state["description"]} required />

        //     <label htmlFor="make">Make: </label>
        //     {/* <input type="text" id="make" name="make" value={data.state["make"]}required /> */}
        //     <select required >
        //         <option selected="selected">{data.state["make"]}</option>
        //         <option value="audi">Audi</option>
        //         <option value="ford">Ford</option>
        //         <option value="toyota">Toyota</option>
        //         <option value="vauxhall">Vauxhall</option>
        //         <option value="volkswagon">Volkswagon</option>
        //     </select>

        //     <label htmlFor="model">Model: </label>
        //     <input type="text" id="model" name="model" value={data.state["model"]} required />

        //     <label htmlFor="registration">Registration Year: </label>
        //     <input type="text" id="registration" name="registration" value={data.state["regYear"]} required />

        //     <label htmlFor="seats">Seats: </label>
        //     <input type="text" id="seats" name="seats" value={data.state["numSeats"]} required />

        //     <label htmlFor="doors">Doors: </label>
        //     <input type="text" id="doors" name="doors" value={data.state["numDoors"]} required />

        //     <label htmlFor="colour">Colour: </label>
        //     <input type="text" id="colour" name="colour" value={data.state["colour"]} required />

        //     <label htmlFor="price">Price: </label>
        //     <input type="text" id="price" name="price" value={data.state["price"]} required />

        //     <button>Update</button>
        //     {/* <input
        //         type="submit"
        //         value="Update"  
        //     /> */}

        // </form>
    );
}

export default UpdateCarAdvert;