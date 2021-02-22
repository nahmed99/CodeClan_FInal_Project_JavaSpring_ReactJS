import { useState, useEffect } from 'react';
import {getCustomer} from '../services/CustomerService';
import {deleteCarAdvert} from '../services/CarService';
import {deleteJobAdvert} from '../services/JobService';
import {deletePropertyAdvert} from '../services/PropertyService';
import CustomerAds from './CustomerAds';

const UserArea = () => {

    const [customer, setCustomer] = useState(null);

    useEffect(() => {

        getCustomer(2)
        .then((customerData) => {
            setCustomer(customerData);
        })

    }, []);



      const onAdvertSelected = (advert) => {
        console.log(advert.category);


        // The following are just a TEST. Re-do with correct code later!!!

        // The following are just a TEST. Re-do with correct code later!!!

        // The following are just a TEST. Re-do with correct code later!!!
    
        if (advert.category === "CAR") {
            deleteCarAdvert(advert.id)
            .then((resp) => {
                console.log(resp);
            });
        }

        if (advert.category === "JOB") {
            deleteJobAdvert(advert.id)
            .then((resp) => {
                console.log(resp);
            });
        }

        if (advert.category === "PROPERTY") {
            deletePropertyAdvert(advert.id)
            .then((resp) => {
                console.log(resp);
            });
        }
    }

 
    return (
        <div className="user-area">
            {customer && <h4>{customer.firstName} {customer.secondName}, you have placed the following adds:</h4>}
            <br></br>
            {customer && <CustomerAds customer={customer} onAdvertSelected={onAdvertSelected}/>}
        </div>
    );
}

export default UserArea;