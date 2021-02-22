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
        
        <tr key={advert.title} className="advert-row" onClick={ handleClick }>
            <td><b>{advert.category}</b></td>
            <td> &nbsp; {advert.title}</td>
            <td> &nbsp; <b>{moneyTitle}:</b></td>
            <td align="right"> &nbsp; £{advert.price || advert.salary}</td>
        </tr>

    )

}

export default AdvertSummary;