import { useState, useEffect } from 'react';
import {getCustomer} from '../services/CustomerService';
import { fulfilCarAction, fulfilJobAction , fulfilPropertyAction } from '../services/Actions';
import CustomerAds from './CustomerAds';

const UserArea = () => {

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
            {customer && <h4>{customer.firstName} {customer.secondName}, you have placed the following adds:</h4>}
            <br></br>
            {customer && <CustomerAds customer={customer} onActionSelected={onActionSelected}/>}
        </div>
    );
}

export default UserArea;