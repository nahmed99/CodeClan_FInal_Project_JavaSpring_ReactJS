
const CarAdvert = ( {advert} ) => {


    return (
            <table>
                <tbody>
                    <tr>
                        <th><b>{ advert.category }</b></th>
                    </tr>
                    <tr>
                        <td><b>Title:</b> { advert.title } { advert.description }</td>
                    </tr>
                    <tr>
                        <td><b>Make: </b> {advert.make}</td>
                        <td><b>Model: </b> {advert.model}</td>
                        <td><b>Year: </b> {advert.regYear}</td>
                    </tr>
                    <tr>
                        <td><b>Transmission: </b> {advert.transmission}</td>
                        <td><b>Doors: </b> {advert.numDoors}</td>
                        <td><b>Seats: </b> {advert.numSeats}</td>
                    </tr>
                    <tr>
                        <td><b>Colour: </b> {advert.colour}</td>
                        <td><b>Price: </b> £{advert.price}</td>
                    </tr>
                    <tr>
                        <th><b>Contact Details</b></th>
                    </tr>
                    <tr>
                        <td><b>Name:</b> { advert.customer.firstName } { advert.customer.secondName }</td>
                    </tr>
                    <tr>
                        <td><b>Email: </b> { advert.customer.email }</td>
                    </tr>
                </tbody>
            </table>
    )
}

export default CarAdvert;
