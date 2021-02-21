import AdvertSummary from '../components/AdvertSummary';


const AdvertList = ({ adverts, onAdvertSelected }) => {
    
    const advertNodes = adverts.map((advert) => {

        // Determine whether to use price (car or property) or salary (job)
        let moneyTitle, moneyTotal;
        if (advert.category === "JOB") {
            moneyTitle = "Salary";
            moneyTotal = advert.salary;
        } else {
            moneyTitle = "Price";
            moneyTotal = advert.price;
        }



        return (
            <AdvertSummary
            id = {advert.id}
            category = {advert.category}
            title = {advert.title}
            description = {advert.description}
            moneyTitle = {moneyTitle}
            moneyTotal = {moneyTotal}
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