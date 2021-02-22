// const AdvertSummary = ({ id, category, title, moneyTotal, onAdvertSelected }) => {

const AdvertSummary = ({ advert, onAdvertSelected }) => {

    // Determine whether to use price (car or property) or salary (job)
    let moneyTitle;
    if (advert.category === "JOB") {
        moneyTitle = "Salary";
    } else {
        moneyTitle = "Price";
    }

    
    const handleClick = () => {
        onAdvertSelected(advert)
    }

    return (
        <p key={advert.id + advert.category} className="advert-row" onClick={ handleClick }> <b>{advert.category}</b> {advert.title} <b>{moneyTitle}:</b> £{advert.price || advert.salary}</p>
    )

}

export default AdvertSummary;