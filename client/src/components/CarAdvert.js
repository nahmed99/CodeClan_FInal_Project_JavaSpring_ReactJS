import Carousel from 'react-elastic-carousel';
import Card from './Card';


const CarAdvert = ( {advert} ) => {

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4}
    ]

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

            <Carousel breakPoints={ breakPoints }>
            <Card anImage="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" anImageAlt="Car Image"/>
            <Card anImage="https://cache.desktopnexus.com/thumbseg/1560/1560621-bigthumbnail.jpg" anImageAlt="Car Image"/>
            <Card anImage="https://cache.desktopnexus.com/thumbseg/1560/1560621-bigthumbnail.jpg" anImageAlt="Car Image"/>
            <Card anImage="https://3cjpn44a10815cq8wfbykrdc-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/sunsethawaii.jpg" anImageAlt="Car Image"/>
            <Card anImage="https://cache.desktopnexus.com/thumbseg/1560/1560621-bigthumbnail.jpg" anImageAlt="Car Image"/>
            </Carousel>
        </>
    )
}

export default CarAdvert;
