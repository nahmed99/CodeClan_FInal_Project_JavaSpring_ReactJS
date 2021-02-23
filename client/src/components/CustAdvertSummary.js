import { Link } from "react-router-dom";

const CustAdvertSummary = ({ advert, onActionSelected }) => {

    // Determine whether to use price (car or property) or salary (job)
    let moneyTitle;
    if (advert.category === "JOB") {
        moneyTitle = "Salary";
    } else {
        moneyTitle = "Price";
    }

    
    const handleUpdate = () => {
        // onActionSelected(advert, 'U')
    }

    const handleDelete = () => {
        onActionSelected(advert, 'D')
    }

    return (

        <>
        
            <tr className="advert-row">
                <td><b>{advert.category}</b></td>
                <td> &nbsp; {advert.title}</td>
                <td> &nbsp; <b>{moneyTitle}:</b></td>
                <td align="right"> &nbsp; £{advert.price || advert.salary}</td>
                <td> &nbsp;  <Link to={{  
                pathname: `/car/update/${advert.id}`, 
                state: advert,
            }}> ✎ </Link></td>
                <td  onClick={ handleDelete }> &nbsp; 🗑</td>
            </tr>

                
        </>

    )

}

export default CustAdvertSummary;