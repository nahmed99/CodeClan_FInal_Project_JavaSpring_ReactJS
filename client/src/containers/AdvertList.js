import AdvertSummary from '../components/AdvertSummary';


const AdvertList = ({ adverts, onAdvertSelected }) => {
    
    const advertNodes = adverts.map((advert) => {

        return (
            <AdvertSummary
            advert={advert}
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