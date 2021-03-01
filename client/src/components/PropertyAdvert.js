import Carousel from 'react-elastic-carousel';
import Card from './Card';



const PropertyAdvert = ( {advert} ) => {


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
            <Card number="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"/>
            <Card number="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elevenwarriors.com%2Fohio-state-football%2F2015%2F09%2F58775%2Fhate-week-hawaii&psig=AOvVaw1v6wVjQO5iS-gjhCJrEOvd&ust=1614678534752000&source=images&cd=vfe&ved=2ahUKEwid0Ji16I7vAhUDR8AKHcMaBiUQjRx6BAgAEAc"/>
            <Card number="https://cache.desktopnexus.com/thumbseg/1560/1560621-bigthumbnail.jpg"/>
            <Card number="https://3cjpn44a10815cq8wfbykrdc-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/sunsethawaii.jpg"/>
            <Card number="https://cache.desktopnexus.com/thumbseg/1560/1560621-bigthumbnail.jpg"/>
            </Carousel>
        </>
    )
}

export default PropertyAdvert;
