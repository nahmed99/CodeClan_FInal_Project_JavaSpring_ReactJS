import CarAdvert from '../components/CarAdvert';
import JobAdvert from '../components/JobAdvert';
import PropertyAdvert from '../components/PropertyAdvert';


const FullAdvert = ({ advert, trigger, setTrigger }) => {

    // Only one of the components below will be rendered - as
    // the advert can only have ONE category at a time.
    return (trigger) ? (
        <div className="popup">

            <div className="popup-inner">
                <button className="close-btn" onClick={() => setTrigger(false)}>✖️</button>
            

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
            </div>
        </div>

    ) : "";
}

export default FullAdvert;