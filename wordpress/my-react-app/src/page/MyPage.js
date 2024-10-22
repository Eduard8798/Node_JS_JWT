import {useLocation, useParams} from "react-router-dom";
import {useMainMenuContext} from "../component/menu/MyMenuContext";
import {useEffect, useState} from "react";

export default function MyPage (props) {

    const {page_slug} = useParams();

    

    const {getPageBySlug,pages} = useMainMenuContext();

    const [currentPage,setCurrentPage] = useState(null);

    useEffect(() => {
        setCurrentPage(getPageBySlug(page_slug))
    }, [page_slug]);

    if (!currentPage){
        return <>Loading...</>
    }

    return (
        <>
            <div>Page  {currentPage.title.rendered}</div>
            <div dangerouslySetInnerHTML={{__html: currentPage.content.rendered}}></div>
        </>
    )
}
