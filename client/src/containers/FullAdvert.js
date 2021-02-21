import { getCarAdvert } from '../services/CarService';
import { getJobAdvert } from '../services/JobService';
import { getPropertyAdvert } from '../services/PropertyService';
import CarAdvert from '../components/CarAdvert';
import JobAdvert from '../components/JobAdvert';
import PropertyAdvert from '../components/PropertyAdvert';


import { useEffect } from "react";

const FullAdvert = ({ id, category }) => {

    useEffect(() => {
        if (category === "CAR") {
            getCarAdvert(id)
            .then((carAdvert) => {

                return (
                    <CarAdvert 
                        carAdvert = {carAdvert}
                    />
                )
            });
        } else if (category === "JOB") {
            getJobAdvert(id)
            .then((jobAdvert) => {

                return (
                    <JobAdvert 
                        jobAdvert = {jobAdvert}
                    />
                )
            });
        } if (category === "PROPERTY") {
            getPropertyAdvert(id)
            .then((propertyAdvert) => {

                return (
                    <PropertyAdvert 
                        propertyAdvert = {propertyAdvert}
                    />
                )
            });
        }
    });
    

    return (
        <>

        </>
    )
}

export default FullAdvert;