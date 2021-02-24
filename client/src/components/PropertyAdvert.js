
const PropertyAdvert = ( {advert} ) => {


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
                        <td><b>Type: </b> {advert.type}</td>
                        <td><b>Rooms: </b> {advert.numRooms}</td>
                    </tr>
                    <tr>
                        <td><b>Address: </b> {advert.address}</td>
                    </tr>
                    <tr>
                        <td><b>Post Code: </b> {advert.postCode}</td>
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

export default PropertyAdvert;
