import {useParams} from "react-router-dom";

export default function CarModelPage  ()  {

const {seo_text,car_slug} = useParams();

    return (
        <>
            <h1>Cars page : {car_slug}</h1>
      </>
    )
}