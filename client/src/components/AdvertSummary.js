const AdvertSummary = ({ id, category, title, moneyTitle, moneyTotal, onAdvertSelected }) => {

    const handleClick = () => {
        onAdvertSelected(id, category)
    }

    return (
        <p key={id + category} className="advert-row" onClick={ handleClick }> <b>{category}</b> {title} <b>{moneyTitle}:</b> £{moneyTotal}</p>
    )

}

export default AdvertSummary;