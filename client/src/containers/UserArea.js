import { useState, useEffect } from 'react';
import {getCustomer} from '../services/CustomerService';
import CustomerAds from './CustomerAds';

const UserArea = () => {

    const [customer, setCustomer] = useState(null);

    console.log("We are inside UserArea");

    useEffect(() => {
        
        console.log("We are inside UserArea, useEffect***");

        getCustomer(2)
        .then((customerData) => {
            setCustomer(customerData);
        })

      }, []);



      const onAdvertSelected = (advert) => {
        // Each time the user clicks on an advert summary, we
        // want the full advert to be displayed to the user.
    
        // if (category === "CAR") {
        //   getCarAdvert(id)
        //   .then((advert) => {
        //     console.log(advert);
        //     setOneAdvert(advert);
        //   });
        // }
    
        // if (category === "JOB") {
        //   getJobAdvert(id)
        //   .then((advert) => {
        //     console.log(advert);
        //     setOneAdvert(advert);
        //   });
        // }
    
        // if (category === "PROPERTY") {
        //   getPropertyAdvert(id)
        //   .then((advert) => {
        //     console.log(advert);
        //     setOneAdvert(advert);
        //   });
        // }
    
       
      }


    // const handleClick = () => {
    //     setCustId(1);

    //     getCustomer(1)
    //     .then((customerData) => {
    //         setCustomer(customerData);

    //         console.log(customer);
    //         console.log("custId: " + custId);
    //     });


    //     console.log("OUTSIDE: " + customer);
    //     console.log("OUTSIDE custId: " + custId);
    // }


    return (
        <div className="user-area">
            {/* <h3 onClick={handleClick}>Click to view your adverts.</h3> */}
            <h4>Customer Name is:</h4>
            {customer && <CustomerAds customer={customer} onAdvertSelected={onAdvertSelected}/>}
        </div>
    );
}

export default UserArea;