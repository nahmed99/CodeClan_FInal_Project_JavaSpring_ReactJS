
const AddCarAdvert = () => {

    
    // Set up state variables to handle any changes made to the form
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


    // Get the advert that we are to update (the data that 
    // we have been using in this function comes from the
    // CUSTOMER TABLE!!! So we need to retrieve the data 
    // from CarAdvert, and then update that and send back!
    useEffect(() => {
        getCarAdvert(data.state["id"])
            .then((advert) => {
                setCarAdvert(advert);
            // console.log(advert);
        });
    }, []);           
    

    const handleSubmit = (ev) => {
        
        ev.preventDefault(); // prevent the page from refreshing

        function getAdvertData () {
            getCarAdvert(data.state["id"])
            .then((advert) => {
                setCarAdvert(advert);
            // console.log(advert);
            });
        }


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
                    console.log(respData);
            })
        }

        updateAdvert();



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

        <label htmlFor="make">Transmission: </label>
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
    );
}

export default UpdateCarAdvert;