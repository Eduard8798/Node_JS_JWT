import {Link} from "react-router-dom";
import {useState} from "react";

export default function CarsPage  () {

    const [cars, setCars] = useState([
        {slug: 'bmw', name: 'BMW'},
        {slug: 'jeep', name: 'JEEP'},
        {slug: 'lexus', name: 'Lexus'}
    ]);

    return (
        <>
            <h1>CarsPages</h1>
            <ul>
                {cars.map(car=>(
                    <li key={car.slug}>
                        <Link to={`/cars/some-seo-text/${car.slug}`}>
                            {car.name}</Link>
                    </li>
                ))}

            </ul>
        </>
    )
}
/*
<li><Link to={"bmw"}>Bmw</Link></li>
<li>
    <Link to={"jeep"}>JEEP</Link>
</li>
<li>
    <Link to={"lexus"}>Lexus</Link>
</li>*/
