import Carousel from 'react-elastic-carousel';
import Card from './Card';



const PropertyAdvert = ( {advert} ) => {


    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4}
    ]


    // Create image Cards for all items in imageUrl of advert
    const adImageUrls = advert.imageUrl.map((theImage) => {
        // console.log(theImage);
        return <Card key={theImage} anImage={theImage} anImageAlt="Property Image" />
    });
    // console.log(adImageUrls);


    return (
        <>
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

            <Carousel breakPoints={ breakPoints }>
                {adImageUrls}
            </Carousel>
        </>
    )
}

export default PropertyAdvert;
