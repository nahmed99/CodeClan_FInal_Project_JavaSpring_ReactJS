import { getCarAdvert } from '../services/CarService';
import { getJobAdvert } from '../services/JobService';
import { getPropertyAdvert } from '../services/PropertyService';
import CarAdvert from '../components/CarAdvert';
import JobAdvert from '../components/JobAdvert';
import PropertyAdvert from '../components/PropertyAdvert';


import { useEffect, useState } from "react";

const FullAdvert = ({ id, category }) => {

    // Return nothing, if none of the above worked!
    return (
        <PropertyAdvert 
            category = {id}
            description = {category}
        />
    )
}

export default FullAdvert;