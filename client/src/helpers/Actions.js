import {addCarAdvert, updateCarAdvert, deleteCarAdvert} from '../services/CarService';
import {addJobAdvert, updateJobAdvert, deleteJobAdvert} from '../services/JobService';
import {addPropertyAdvert, updatePropertyAdvert, deletePropertyAdvert} from '../services/PropertyService';


export const fulfilCarAction = (advert, action) => {


    if (action === 'C') {
        addCarAdvert(advert)
        .then((resp) => {
            console.log(resp);
        });
    }

    if (action === 'U') {


        // This is where the form should be displayed!!!


        

        // updateCarAdvert(advert)
        // .then((resp) => {
        //     console.log(resp);
        // });
    }

    if (action === 'D') {
        deleteCarAdvert(advert.id)
        .then((resp) => {
            console.log(resp);
        });
    }

}


export const fulfilJobAction = (advert, action) => {

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


export const fulfilPropertyAction = (advert, action) => {

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