import AdvertSummary from '../components/AdvertSummary';


const FullList = ({ adverts, onAdvertSelected }) => {
    
    const advertNodes = adverts.map((advert) => {
        console.log("in FullAdvertList mapping: " + advert.category);
        return (
            <AdvertSummary
            id = {advert.id}
            category = {advert.category}
            title = {advert.title}
            description = {advert.description}
            customer = {advert.customer}
            onAdvertSelected={onAdvertSelected}
            />
        )
    });

    return (
        <>
        {advertNodes}
        </>
    )
}

export default FullList;