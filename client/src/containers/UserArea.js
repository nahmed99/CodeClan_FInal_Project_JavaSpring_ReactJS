import { useState, useEffect } from 'react';
import {getCustomer} from '../services/CustomerService';
import {addCarAdvert, updateCarAdvert, deleteCarAdvert} from '../services/CarService';
import {addJobAdvert, updateJobAdvert, deleteJobAdvert} from '../services/JobService';
import {addPropertyAdvert, updatePropertyAdvert, deletePropertyAdvert} from '../services/PropertyService';
import CustomerAds from './CustomerAds';

const UserArea = () => {

    const [customer, setCustomer] = useState(null);

    useEffect(() => {

        getCustomer(2)
        .then((customerData) => {
            setCustomer(customerData);
        })

    }, []);



    const fulfilCarAction = (advert, action) => {

        if (action === 'C') {
            addCarAdvert(advert)
            .then((resp) => {
                console.log(resp);
            });
        }

        if (action === 'U') {
            updateCarAdvert(advert)
            .then((resp) => {
                console.log(resp);
            });
        }

        if (action === 'D') {
            deleteCarAdvert(advert.id)
            .then((resp) => {
                console.log(resp);
            });
        }


    }


    const fulfilJobAction = (advert, action) => {


        if (action === 'C') {
            addJobAdvert(advert)
            .then((resp) => {
                console.log(resp);
            });
        }

        if (action === 'U') {
            updateJobAdvert(advert)
            .then((resp) => {
                console.log(resp);
            });
        }

        if (action === 'D') {
            deleteJobAdvert(advert.id)
            .then((resp) => {
                console.log(resp);
            });
        }

    }


    const fulfilPropertyAction = (advert, action) => {

        if (action === 'C') {
            addPropertyAdvert(advert)
            .then((resp) => {
                console.log(resp);
            });
        }

        if (action === 'U') {
            updatePropertyAdvert(advert)
            .then((resp) => {
                console.log(resp);
            });
        }

        if (action === 'D') {
            deletePropertyAdvert(advert.id)
            .then((resp) => {
                console.log(resp);
            });
        }

    }


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