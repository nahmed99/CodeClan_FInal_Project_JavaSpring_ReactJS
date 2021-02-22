import AdvertSummary from '../components/AdvertSummary';


const CustomerAds = ({ customer, onAdvertSelected }) => {
    

    const carAdvertNodes = customer.carAdverts.map((objectMapped, index) => {

        // console.log(objectMapped);
        // console.log(index);

        return (
            <AdvertSummary key={objectMapped.title}
            advert={objectMapped}
            onAdvertSelected={onAdvertSelected}
            />
        )
    });

    const jobAdvertNodes = customer.jobAdverts.map((objectMapped, index) => {

        // console.log(objectMapped);
        // console.log(index);

        return (
            <AdvertSummary key={objectMapped.title}
            advert={objectMapped}
            onAdvertSelected={onAdvertSelected}
            />
        )
    });

    const propertyAdvertNodes = customer.propertyAdverts.map((objectMapped, index) => {

        // console.log(objectMapped);
        // console.log(index);

        return (
            <AdvertSummary key={objectMapped.title}
            advert={objectMapped}
            onAdvertSelected={onAdvertSelected}
            />
        )
    });

    return (
        <table>
            <tbody>
                {carAdvertNodes}
                {jobAdvertNodes}
                {propertyAdvertNodes}
            </tbody>
        </table>
    )
}

export default CustomerAds;