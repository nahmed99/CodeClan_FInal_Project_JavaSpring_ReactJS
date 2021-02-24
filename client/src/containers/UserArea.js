import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {getCustomer} from '../services/CustomerService';
import { fulfilCarAction, fulfilJobAction , fulfilPropertyAction } from '../helpers/Actions';
import CustomerAds from './CustomerAds';

const UserArea = () => {

    // console.log("Path: Inside UserArea.js");


    const [customer, setCustomer] = useState(null);

    useEffect(() => {

        getCustomer(2)
        .then((customerData) => {
            setCustomer(customerData);
        })

    }, []);



    const onActionSelected = (advert, action) => {
        console.log(advert.category);

        if (advert.category === "CAR") {
            fulfilCarAction(advert, action);
        }

        if (advert.category === "JOB") {
            fulfilJobAction(advert, action);
        }

        if (advert.category === "PROPERTY") {
            fulfilPropertyAction(advert, action);
        }
    }

 
    return (
        <div className="user-area">
            {customer && <Link to={{  
                pathname: `/car/add/${customer.id}`, 
                state: customer,
            }}> <button>New</button> </Link>}
            {customer && <h4>{customer.firstName} {customer.secondName}, you have placed the following adds:</h4>}
            <br></br>
            {customer && <CustomerAds customer={customer} onActionSelected={onActionSelected}/>}
        </div>
    );
}

export default UserArea;