import { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from "react-router-dom";
import { getCarAdvert, updateCarAdvert } from '../services/CarService';


// MERGE THIS CODE WITH AdvertAdd.js - there are too many similarities to ignore!
// MERGE THIS CODE WITH AdvertAdd.js - there are too many similarities to ignore!
// MERGE THIS CODE WITH AdvertAdd.js - there are too many similarities to ignore!


const AdvertUpdate = () => {

    // console.log("Path: Inside UpdateCarAdvert.js");


    // Grab ADVERT data passed in from CustomerAds container
    const { id } = useParams();
    const advertData = useLocation();

    const history = useHistory();

    console.log(JSON.stringify(advertData.state));
    
    // const { state } = useLocation(); this workds too!

    
    // Set up state variables to handle any changes made to the form
    const [title, setTitle] = useState(advertData.state["title"]);
    const [description, setDescription] = useState(advertData.state["description"]);
    const [make, setMake] = useState(advertData.state["make"]);
    const [model, setModel] = useState(advertData.state["model"]);
    const [regYear, setRegYear] = useState(advertData.state["regYear"]);
    const [transmission, setTransmission] = useState(advertData.state["transmission"]);
    const [numSeats, setNumSeats] = useState(advertData.state["numSeats"]);
    const [numDoors, setNumDoors] = useState(advertData.state["numDoors"]);
    const [colour, setColour] = useState(advertData.state["colour"]);
    const [price, setPrice] = useState(advertData.state["price"]);
    const [carAdvert, setCarAdvert] = useState([]);

    const [updateStatus, setUpdateStatus] = useState(false);


    // Get the advert that we are to update (the data that 
    // we have been using in this function comes from the
    // CUSTOMER TABLE!!! So we need to retrieve the data 
    // from CarAdvert, and then update that and send back!
    useEffect(() => {
        getCarAdvert(advertData.state["id"])
            .then((advert) => {
                setCarAdvert(advert);
            // console.log(advert);
        });
    }, []);           
    

    const handleSubmit = (ev) => {
        
        ev.preventDefault(); // prevent the page from refreshing

        
        function updateAdvert() {

            // Set the new value(s) - both methods (below) work.
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

            // console.log("Data being sent: " + JSON.stringify(carAdvert));

            // console.log("the title: " + title + " the id: " + carAdvert.id);
            // console.log(" the data.state id: " + data.state.id);

            // Update the advert
            updateCarAdvert(carAdvert)
            .then((respData) => {
                    console.log(respData.category);

                    if (respData.category === "CAR") {
                        setUpdateStatus(true);
                    }
            })

        }

        updateAdvert();

    }


    const handleClick = (ev) => {
        
        ev.preventDefault(); // prevent the page from refreshing

        
        if (setUpdateStatus) {
            history.push("/user");
        }

    }


    return (

        <>

        {!updateStatus &&
        <div>
        <h2 className="ad-form">Update Advert</h2>
        <br></br>
        
        <form className="ad-form" onSubmit={handleSubmit}>

        <label htmlFor="title">Title: </label>
        <textarea type="text" id="title" name="title" value={title}
        required onChange={(e) => setTitle(e.target.value)}/>

        <label htmlFor="description">Description: </label>
        <textarea type="text" id="description" name="description" value={description} required  onChange={(e) => setDescription(e.target.value)}/>

        <label htmlFor="make">Make: </label>
        <select required defaultValue={make} onChange={(e) => setMake(e.target.value)}>
            <option>{make}</option>
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

        <label htmlFor="transmission">Transmission: </label>
        <select required defaultValue={transmission} onChange={(e) => setTransmission(e.target.value)}>
            <option>{transmission}</option>
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

    </form>
    </div>
    }

    {updateStatus && 
        <div className="ad-form">
            <h3>Your advert has been updated.</h3>
            <br></br>
            <button onClick={handleClick}>Click To Continue</button> 
        </div>
    }

    </>
    );
}

export default AdvertUpdate;