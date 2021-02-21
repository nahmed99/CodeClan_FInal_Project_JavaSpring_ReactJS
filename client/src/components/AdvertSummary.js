const AdvertSummary = ({ id, category, title, description, customer, onAdvertSelected }) => {


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
        <p key={id + category} className="advert-row" onClick={ handleClick }> {category} and {title} and {description} and {customer.id} and {moneyTitle}</p>
    )

}

export default AdvertSummary;