import AdvertSummary from '../components/AdvertSummary';


const AdvertList = ({ adverts, onAdvertSelected }) => {
    
    const advertNodes = adverts.map((advert) => {

        return (
            <AdvertSummary
            id = {advert.id}
            category = {advert.category}
            title = {advert.title}
            moneyTotal = {advert.price || advert.salary}
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

export default AdvertList;