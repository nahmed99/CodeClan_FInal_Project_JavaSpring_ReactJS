import AdvertSummary from '../components/AdvertSummary';


const CustomerAds = ({ customer, onAdvertSelected }) => {
    

    console.log("We are inside CustomerAds!!!!");

    console.log(customer.firstName);
    console.log(customer.jobAdverts);
    console.log("The typeof customer.jobAdverts is: " + typeof customer.jobAdverts);
    console.log(customer);

     

    // let theArray = [];
    // theArray = customer.carAdverts;
    // console.log("OVER HEEEEER!!! " + theArray[0].title);

    // let theArray = [];
    // theArray = cars;

    // console.log("Cars: " + cars.title);
    // console.log("Jobs: " + jobs);
    // console.log("Properties: " + properties);
    // console.log("theArray: " + theArray);

    
    // const carAdvertNodes = customer.carAdverts.map((advert) => {

    //     return (
    //         <AdvertSummary key={advert.title}
    //         advert={advert}
    //         // onAdvertSelected={onAdvertSelected}
    //         />
    //     )
    // });

    // const jobAdvertNodes = customer.jobAdverts.map((advert) => {

    //     console.log(advert);
    //     console.log(advert.title);

    //     return (
    //         <AdvertSummary key={advert.title}
    //         advert={advert}
    //         // onAdvertSelected={onAdvertSelected}
    //         />
    //     )
    // });


    const carAdvertNodes = customer.carAdverts.map((objectMapped, index) => {

        console.log(objectMapped);
        console.log(index);

        return (
            <AdvertSummary key={objectMapped.title}
            advert={objectMapped}
            onAdvertSelected={onAdvertSelected}
            />
        )
    });

    const jobAdvertNodes = customer.jobAdverts.map((objectMapped, index) => {

        console.log(objectMapped);
        console.log(index);

        return (
            <AdvertSummary key={objectMapped.title}
            advert={objectMapped}
            onAdvertSelected={onAdvertSelected}
            />
        )
    });

    const propertyAdvertNodes = customer.propertyAdverts.map((objectMapped, index) => {

        console.log(objectMapped);
        console.log(index);

        return (
            <AdvertSummary key={objectMapped.title}
            advert={objectMapped}
            onAdvertSelected={onAdvertSelected}
            />
        )
    });


    // const propertyAdvertNodes = customer.propertyAdverts.map((advert) => {

    //     return (
    //         <AdvertSummary key={advert.title}
    //         advert={advert}
    //         // onAdvertSelected={onAdvertSelected}
    //         />
    //     )
    // });

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