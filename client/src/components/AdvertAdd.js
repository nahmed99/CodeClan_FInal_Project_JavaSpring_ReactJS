import { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from "react-router-dom";
import { addCarAdvert } from '../services/CarService';

// MERGE THIS CODE WITH AdvertUpdate.js - there are too many similarities to ignore!
// MERGE THIS CODE WITH AdvertUpdate.js - there are too many similarities to ignore!
// MERGE THIS CODE WITH AdvertUpdate.js - there are too many similarities to ignore!

const AdvertAdd = () => {


    // Grab CUSTOMER data passed in from UserArea.js container
    const { id } = useParams();
    const data = useLocation();
    const customerData = data.state;

    const history = useHistory();


    console.log(JSON.stringify(customerData));

    
    // Set up state variables to handle any changes made to the form
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [regYear, setRegYear] = useState("");
    const [transmission, setTransmission] = useState("");
    const [numSeats, setNumSeats] = useState("");
    const [numDoors, setNumDoors] = useState("");
    const [colour, setColour] = useState("");
    const [price, setPrice] = useState("");
    const [carAdvert, setCarAdvert] = useState([]);

    const [showCarForm, setShowCarForm] = useState(false);
    const [showJobForm, setShowJobForm] = useState(false);
    const [showPropertyForm, setShowPropertyForm] = useState(false);

    const [updateStatus, setUpdateStatus] = useState(false);


    // Switch to help decide which form to show...
    useEffect(() => {
        switch (category) {
            case "CAR":
                setShowCarForm(true);
                setShowJobForm(false);
                setShowPropertyForm(false);
                break;

            case "JOB":
                setShowCarForm(false);
                setShowJobForm(true);
                setShowPropertyForm(false);
                break;

            case "PROPERTY":
                setShowCarForm(false);
                setShowJobForm(false);
                setShowPropertyForm(true);
                break;

            default:
                setShowCarForm(false);
                setShowJobForm(false);
                setShowPropertyForm(false);
        }

        console.log(category);

    }, [category]);   

    
    const handleSubmit = (ev) => {
        
        ev.preventDefault(); // prevent the page from refreshing

        function AddCarAdvert() {

            // Set the value(s) - both methods (below) work.
            // carAdvert.category = category;
            // carAdvert["title"] = title;
            // carAdvert.description = description;
            // carAdvert.cost = 0.00; // cost of advert - server will calculate this.
            // carAdvert.customer = customerData;
            // carAdvert.make = make;
            // carAdvert.model = model;
            // carAdvert.regYear = regYear;
            // carAdvert.transmission = transmission;
            // carAdvert.numSeats = numSeats;
            // carAdvert.numDoors = numDoors;
            // carAdvert.colour = colour;
            // carAdvert.price = price;
            // carAdvert.imageUrl = [];

            const newCarAdvert = {
                category,
                title,
                description,
                "cost" : 0.00,
                "customer": customerData,
                "make": make,
                model,
                regYear,
                "transmission": transmission,
                numSeats,
                numDoors,
                colour,
                price,
                "imageUrl": []
            }

            console.log("******Data being sent: " + JSON.stringify(newCarAdvert));

            // console.log("the title: " + title + " the id: " + carAdvert.id);
            // console.log(" the data.state id: " + data.state.id);

            // Add the advert
            addCarAdvert(newCarAdvert)
            .then((respData) => {
                    console.log(respData);

                if (respData.category === "CAR") {
                    setUpdateStatus(true);
                }
            })
        }

        

        switch (category) {
            case "CAR":
                AddCarAdvert();
                break;

            // case "JOB":
            //     AddJobAdvert();
            //     break;

            // case "PROPERTY":
            //     AddPropertyAdvert();
            //     break;

        }

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
            <h2 className="ad-form">Place New Advert</h2>
            <br></br>

            <form className="ad-form" onSubmit={handleSubmit}>

                <label htmlFor="make">Category: </label>
                <select required defaultValue="Select" onChange={(e) => setCategory(e.target.value)}>
                    <option>Select</option>
                    <option value="CAR">CAR</option>
                    <option value="JOB">JOB</option>
                    <option value="PROPERTY">PROPERTY</option>
                </select>

            {showCarForm && 
              <div>
                <label htmlFor="title">Title: </label>
                <textarea type="text" id="title" name="title" value={title}
                required onChange={(e) => setTitle(e.target.value)}/>

                <label htmlFor="description">Description: </label>
                <textarea type="text" id="description" name="description" value={description} required  onChange={(e) => setDescription(e.target.value)}/>

                <label htmlFor="make">Make: </label>
                <select required defaultValue="Select" onChange={(e) => setMake(e.target.value)}>
                    <option>Select</option>
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
                <select required defaultValue="Select" onChange={(e) => setTransmission(e.target.value)}>
                    <option>Select</option>
                    <option value="MANUAL">MANUAL</option>
                    <option value="AUTOMATIC">AUTOMATIC</option>
                </select>

                <label htmlFor="seats">Seats: </label>
                <input type="number" id="seats" name="seats" value={numSeats} required onChange={(e) => setNumSeats(e.target.value)}/>

                <label htmlFor="doors">Doors: </label>
                <input type="number" id="doors" name="doors" value={numDoors} required onChange={(e) => setNumDoors(e.target.value)}/>

                <label htmlFor="colour">Colour: </label>
                <input type="text" id="colour" name="colour" value={colour} required onChange={(e) => setColour(e.target.value)}/>

                <label htmlFor="price">Price: </label>
                <input type="number" id="price" name="price" value={price} required onChange={(e) => setPrice(e.target.value)}/>

                <button>Add Advert</button>

              </div>}
            </form>
            </div>
            }

            {updateStatus && 
                <div className="ad-form">
                <h3>Your advert has been created.</h3>
                <br></br>
                <button onClick={handleClick}>Click To Continue</button> 
        </div>
    }
        </>
    );
}

export default AdvertAdd;