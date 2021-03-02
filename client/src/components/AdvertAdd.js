import { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from "react-router-dom";
import { addCarAdvert } from '../services/CarService';
import { addJobAdvert } from '../services/JobService';
import { addPropertyAdvert } from '../services/PropertyService';

// MERGE THIS CODE WITH AdvertUpdate.js - there are too many similarities to ignore!
// MERGE THIS CODE WITH AdvertUpdate.js - there are too many similarities to ignore!
// MERGE THIS CODE WITH AdvertUpdate.js - there are too many similarities to ignore!

const AdvertAdd = () => {


    // Grab CUSTOMER data passed in from UserArea.js container
    const { id } = useParams();
    const data = useLocation();
    const history = useHistory();
    // const customerData = data.state;

    const [customerData, setCustomerData] = useState([]);


    console.log(JSON.stringify(customerData));

    
    // Set up state variables to handle any changes made to the form
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // For category === "CAR"
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [regYear, setRegYear] = useState("");
    const [transmission, setTransmission] = useState("");
    const [numSeats, setNumSeats] = useState("");
    const [numDoors, setNumDoors] = useState("");
    const [colour, setColour] = useState("");
    

    // For category === "JOB"
    const [industry, setIndustry] = useState("");
    const [jobType, setJobType] = useState("");
    const [salary, setSalary] = useState(0);

    // For category === "PROPERTY"
    const [type, setType] = useState("");
    const [address, setAddress] = useState("");
    const [postCode, setPostCode] = useState("");
    const [numRooms, setNumRooms] = useState("");


    // For both "CAR" and "PROPERTY"
    const [price, setPrice] = useState(0);


    const [showCarForm, setShowCarForm] = useState(false);
    const [showJobForm, setShowJobForm] = useState(false);
    const [showPropertyForm, setShowPropertyForm] = useState(false);

    const [updateStatus, setUpdateStatus] = useState(false);


    // Image uploads
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        setCustomerData(data.state);
    }, []);  



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

        // const reqdCustDetails = {
        //     "id": 2,
        //     "firstName": "Mike",
        //     "secondName": "Hall",
        //     "email": "mhallemail@thefreeplace.there"
        //     }


        const reqdCustDetails = {
            "id": customerData.id,
            "firstName": customerData.firstName,
            "secondName": customerData.secondName,
            "email": customerData.email
            };

        
        ev.preventDefault(); // prevent the page from refreshing

        function AddCarAdvert() {

            const newCarAdvert = {
                category,
                title,
                description,
                "cost" : 0.00,
                // "customer": customerData,
                "customer": reqdCustDetails,
                "make": make,
                model,
                regYear,
                "transmission": transmission,
                numSeats,
                numDoors,
                colour,
                price,
                "imageUrl": [{image}]
            }


            console.log("******Data being sent: " + JSON.stringify(newCarAdvert));

            // Add the advert
            addCarAdvert(newCarAdvert)
            .then((respData) => {
                    console.log(respData);

                if (respData.category === "CAR") {
                    setUpdateStatus(true);
                }
            })
        }


        function AddJobAdvert() {

            const newJobAdvert = {
                category,
                title,
                description,
                "cost" : 0.00,
                // "customer": customerData,
                "customer": reqdCustDetails,
                industry,
                jobType,
                salary
            }

            console.log("******Data being sent: " + JSON.stringify(newJobAdvert));


            // Add the advert
            addJobAdvert(newJobAdvert)
            .then((respData) => {
                    console.log(respData);

                if (respData.category === "JOB") {
                    setUpdateStatus(true);
                }
            })
        }


        function AddPropertyAdvert() {

            let newPropertyAdvert = {
                category,
                title,
                description,
                "cost" : 0.00,
                //"customer": customerData,
                "customer": reqdCustDetails,
                type,
                address,
                postCode,
                numRooms,
                price,
                "imageUrl": [image]
            }

            console.log("******Data being sent: " + JSON.stringify(newPropertyAdvert));


            // Add the advert
            addPropertyAdvert(newPropertyAdvert)
            .then((respData) => {
                    console.log(respData);

                if (respData.category === "PROPERTY") {
                    setUpdateStatus(true);
                }
            })
        }        
        

        console.log("&*&*&* "  + category);

        switch (category) {
            case "CAR":
                console.log("going to create CAR ");
                AddCarAdvert();
                break;

            case "JOB":
                console.log("going to create JOB");
                AddJobAdvert();
                break;

            case "PROPERTY":
                console.log("going to create PROPERTY");
                AddPropertyAdvert();
                break;

        }

    }



    // Currently got image uploading, but not doing anything with 
    // it - i.e., not storing its (cloudinary url) or anything. One
    // to complete in the future!
    const uploadImage = async e => {
        const files = e.target.files;
        const data  = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'adservice'); // This is the upload preset name on cloudinary.com
        setLoading(true);
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/nahmed99/image/upload',
            {
                method: 'POST',
                body: data
            }
        );

        const file = await res.json();
        setImage(file.secure_url);
        setLoading(false);
    }



    const handleClick = (ev) => {
        
        ev.preventDefault(); // prevent the page from refreshing
        
        if (updateStatus) {
            history.push("/user");
        }

    }


    // For images:
    // 	https://api.cloudinary.com/v1_1/nahmed99

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

              </div>}


              {showJobForm && 
              <div>
                <label htmlFor="title">Title: </label>
                <textarea type="text" id="title" name="title" value={title}
                required onChange={(e) => setTitle(e.target.value)}/>

                <label htmlFor="description">Description: </label>
                <textarea type="text" id="description" name="description" value={description} required  onChange={(e) => setDescription(e.target.value)}/>

                <label htmlFor="industry">Industry: </label>
                <input type="text" id="industry" name="industry" value={industry} required onChange={(e) => setIndustry(e.target.value)}/>

                <label htmlFor="jobtype">Job Type: </label>
                <select required defaultValue="Select" onChange={(e) => setJobType(e.target.value)}>
                    <option>Select</option>
                    <option value="CONTRACT">CONTRACT</option>
                    <option value="PERMANENT">PERMANENT</option>
                </select>

                <label htmlFor="salary">Salary: </label>
                <input type="number" id="salary" name="salary" value={salary} required onChange={(e) => setSalary(e.target.value)}/>

              </div>}
            
              {showPropertyForm && 
              <div>
                <label htmlFor="title">Title: </label>
                <textarea type="text" id="title" name="title" value={title}
                required onChange={(e) => setTitle(e.target.value)}/>

                <label htmlFor="description">Description: </label>
                <textarea type="text" id="description" name="description" value={description} required  onChange={(e) => setDescription(e.target.value)}/>

                <label htmlFor="type">Type: </label>
                <input type="text" id="type" name="type" value={type} required onChange={(e) => setType(e.target.value)}/>

                <label htmlFor="address">Address: </label>
                <input type="text" id="address" name="address" value={address} required onChange={(e) => setAddress(e.target.value)}/>

                <label htmlFor="postcode">Post Code: </label>
                <input type="text" id="postcode" name="postcode" value={postCode} required onChange={(e) => setPostCode(e.target.value)}/>

                <label htmlFor="numrooms">Number Of Rooms: </label>
                <input type="number" id="numrooms" name="numrooms" value={numRooms} required onChange={(e) => setNumRooms(e.target.value)}/>

                <label htmlFor="price">Price: </label>
                <input type="number" id="price" name="price" value={price} required onChange={(e) => setPrice(e.target.value)}/>

              </div>}

              {(showCarForm || showPropertyForm) && 
                <div>

                    <label htmlFor="imageUrl">Image Upload: </label>
                    <input type="file" id="imageUrl" name="file" placeholder="Upload an image" onChange={uploadImage}/>
                    {loading ? (
                        <h3>loading...</h3>
                    ) : (
                        <img src={image} style={{width: '350px'}} />
                    ) }
                </div>
              }

              <button>Add Advert</button>

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