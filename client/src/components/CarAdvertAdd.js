import { useState, useEffect } from 'react';
import { addCarAdvert } from '../services/CarService';

const CarAdvertAdd = () => {

    
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
    }, [category]);   

    
    const handleSubmit = (ev) => {
        
        ev.preventDefault(); // prevent the page from refreshing

        function AddAdvert() {

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

            // Add the advert
            addCarAdvert(carAdvert)
            .then((respData) => {
                    console.log(respData);
            })
        }

        AddAdvert();



        // This is how you could probably set up the new Advert:
        // *****************************************************

        // const id = data.state["id"];
        // const category = data.state["category"];
        // const cost = data.state["cost"];
        //  customer id and imageUrl array
        //  ¦
        //  ¦
        // const updatedAdvert = {id, category, title, description, cost, make, model, regYear, numSeats, numDoors, colour, price};
        //


    }


    return (

        <>
            <form className="ad-form" onSubmit={handleSubmit}>

                <label htmlFor="make">Category: </label>
                <select required defaultValue="Select" onChange={(e) => setCategory(e.target.value)}>
                    <option>Select</option>
                    <option value="CAR">CAR</option>
                    <option value="JOB">JOB</option>
                    <option value="PROPERTY">PROPERTY</option>
                </select>
            </form>

            {showCarForm && <form className="ad-form" onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <textarea type="text" id="title" name="title" value=""
                required onChange={(e) => setTitle(e.target.value)}/>

                <label htmlFor="description">Description: </label>
                <textarea type="text" id="description" name="description" value="" required  onChange={(e) => setDescription(e.target.value)}/>

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
                <input type="text" id="model" name="model" value="" required onChange={(e) => setModel(e.target.value)}/>

                <label htmlFor="registration">Registration Year: </label>
                <input type="number" min="1900" max="2029" step="1" id="registration" name="registration" value="2021" required onChange={(e) => setRegYear(e.target.value)}/>

                <label htmlFor="transmission">Transmission: </label>
                <select required defaultValue="Select" onChange={(e) => setTransmission(e.target.value)}>
                    <option>Select</option>
                    <option value="manual">MANUAL</option>
                    <option value="automatic">AUTOMATIC</option>
                </select>

                <label htmlFor="seats">Seats: </label>
                <input type="number" id="seats" name="seats" value="" required onChange={(e) => setNumSeats(e.target.value)}/>

                <label htmlFor="doors">Doors: </label>
                <input type="number" id="doors" name="doors" value="" required onChange={(e) => setNumDoors(e.target.value)}/>

                <label htmlFor="colour">Colour: </label>
                <input type="text" id="colour" name="colour" value="" required onChange={(e) => setColour(e.target.value)}/>

                <label htmlFor="price">Price: </label>
                <input type="number" id="price" name="price" value="" required onChange={(e) => setPrice(e.target.value)}/>

                <button>Add Advert</button>

            </form> }
        </>
    );
}

export default CarAdvertAdd;