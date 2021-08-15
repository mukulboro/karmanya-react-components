import { useEffect, useState } from 'react'
import axios from 'axios';


export const MainBlogPage = () => {
    const [postData, setPostData] = useState([])
    const [loading, setLoading] = useState(true)
    const getData = async ()=>{
        const response = await axios.get('https://karmanya.herokuapp.com/blog');
        const { data } = await response;
        setPostData(data);
        setLoading(false)
        }
    
    useEffect(()=>getData(), [])

    return <>
    <section id="mainHolder">
        <h1>Blog</h1>

        {
            postData.map((post)=><BlogCard key={post.id} post={post} loading={loading}/>)
        }
    </section>
    </>
}


const BlogCard = ({ post, loading })=>{
    if(loading){
        return <h2>Loading...</h2>
    }else{
        return <section className="blogCard" style={{backgroundImage: `url(${post.imageURL})`}}>
            <h1>{post.title}</h1>
            <p>{post.body.replace(/<[^>]*>?/gm, '').slice(0, 65)}.....</p>
        </section>
    }
}

export default MainBlogPage;