import CarAdvert from '../components/CarAdvert';
import JobAdvert from '../components/JobAdvert';
import PropertyAdvert from '../components/PropertyAdvert';


const FullAdvert = ({ advert }) => {

    // Only one of the components below will be rendered - as
    // the advert can only have ONE category at a time.
    return (
        <>
            {advert.category === "CAR" &&
              <CarAdvert 
                advert = {advert}
              />
            }
            {advert.category === "JOB" &&
              <JobAdvert 
                advert = {advert}
              />
            }
            {advert.category === "PROPERTY" &&
              <PropertyAdvert 
                advert = {advert}
              />
            }
        </>
    )
}

export default FullAdvert;