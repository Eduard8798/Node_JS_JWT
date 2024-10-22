import {Link, useParams} from "react-router-dom";
import {useCarsContext} from "./CarsContext";

export default function CarsPage () {

    const {seo_text,car_slug} = useParams();
    const {carModels} = useCarsContext();
    return(
        <>
            <div className="cars-section">

            Cars page : {car_slug}
                <ul>
                    {carModels.map(car=>car.vendor === car_slug && (
                        <li key={car.vendor}>
                            <Link to={`/cars/some-seo-text/${car.vendor}`}>{car.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
</>
    )
}