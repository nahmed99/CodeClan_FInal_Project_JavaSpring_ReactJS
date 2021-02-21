const AdvertSummary = ({ id, category, title, moneyTotal, onAdvertSelected }) => {

    // Determine whether to use price (car or property) or salary (job)
    let moneyTitle;
    if (category === "JOB") {
        moneyTitle = "Salary";
    } else {
        moneyTitle = "Price";
    }


    const handleClick = () => {
        onAdvertSelected(id, category)
    }

    return (
        <p key={id + category} className="advert-row" onClick={ handleClick }> <b>{category}</b> {title} <b>{moneyTitle}:</b> £{moneyTotal}</p>
    )

}

export default AdvertSummary;