import {useParams} from "react-router-dom";
import {useBlogContext} from "./BlogContext";
import {useEffect, useState} from "react";

export default function BlogItem () {

    const {post_slug} = useParams();

    const {getPostBySlug} = useBlogContext();

    const [current_post,setCurrentPost] = useState(null);

    useEffect(() => {
        setCurrentPost(getPostBySlug(post_slug))
    }, [post_slug]);

    if (!current_post){
        return (<>Loading... {post_slug}</>)
    }

    return(<>
        <h1>{current_post.title.rendered}</h1>
        </>)
}