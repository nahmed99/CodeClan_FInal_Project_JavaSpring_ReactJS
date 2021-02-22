import AdvertSummary from '../components/AdvertSummary';


const AdvertList = ({ adverts, onAdvertSelected }) => {
    
    const advertNodes = adverts.map((advert) => {

        return (
            <AdvertSummary key={advert.title}
            advert={advert}
            onAdvertSelected={onAdvertSelected}
            />
        )
    });

    return (
        <table>
            <tbody>
                {advertNodes}
            </tbody>
        </table>
    )
}

export default AdvertList;