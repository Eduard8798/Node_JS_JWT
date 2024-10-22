import {usePageContext} from "../context/PageContext";


export default function Eror404page (props) {

    props.setByPropsPageName  ('404')

    const {setByContextPageName} = usePageContext();
    setByContextPageName ('Error 404')

    return  (
        <>
            <h1> Eror404page </h1>
        </>
    )
}