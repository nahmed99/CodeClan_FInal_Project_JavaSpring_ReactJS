const UpdateCarAdvert = (advert) => {

    console.log("Path: Inside UpdateCarAdvert.js");

    

    const handleSubmit = (ev) => {
        ev.preventDefault();
        
        console.log("Update To Be Submitted");

    }


    return (
        <form className="stock-form" onSubmit={handleSubmit}>

            <label for="title">Title: </label>
            <input type="text" id="title" name="title" value={advert.title}/>

            <label for="description">Description: </label>
            <input type="text" id="description" name="description" value={advert.description} />

            <label for="make">Make: </label>
            <input type="text" id="make" name="make" value={advert.make}/>

            <label for="model">Model: </label>
            <input type="text" id="model" name="model" value={advert.model}/>

            <label for="registration">Registration Year: </label>
            <input type="text" id="registration" name="registration" value={advert.regYear}/>

            <label for="seats">Seats: </label>
            <input type="text" id="seats" name="seats" value={advert.numSeats}/>

            <label for="doors">Doors: </label>
            <input type="text" id="doors" name="doors" value={advert.numDoors}/>

            <label for="colour">Colour: </label>
            <input type="text" id="colour" name="colour" value={advert.colour}/>

            <label for="price">Price: </label>
            <input type="text" id="price" name="price" value={advert.price}/>

            <input
                type="submit"
                value="Update"
                
            />

        </form>
    );
}

export default UpdateCarAdvert;