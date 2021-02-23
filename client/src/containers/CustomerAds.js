import CustAdvertSummary from '../components/CustAdvertSummary';


const CustomerAds = ({ customer, onActionSelected }) => {
    

    const carAdvertNodes = customer.carAdverts.map((objectMapped, index) => {

        console.log("In CustomerAds.js: " + JSON.stringify(objectMapped));
        // console.log(index);

        return (
            <CustAdvertSummary key={objectMapped.title}
            advert={objectMapped}
            onActionSelected={onActionSelected}
            />
        )
    });

    const jobAdvertNodes = customer.jobAdverts.map((objectMapped, index) => {

        // console.log(objectMapped);
        // console.log(index);

        return (
            <CustAdvertSummary key={objectMapped.title}
            advert={objectMapped}
            onActionSelected={onActionSelected}
            />
        )
    });

    const propertyAdvertNodes = customer.propertyAdverts.map((objectMapped, index) => {

        // console.log(objectMapped);
        // console.log(index);

        return (
            <CustAdvertSummary key={objectMapped.title}
            advert={objectMapped}
            onActionSelected={onActionSelected}
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