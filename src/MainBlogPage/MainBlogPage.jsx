import { useEffect, useState } from 'react'
import axios from 'axios';
import styles from "./MainBlog.module.css"


export const MainBlogPage = () => {
    const [postData, setPostData] = useState([])
    const [loading, setLoading] = useState(true)
    const getData = async ()=>{
        const response = await axios.get('https://karmanya.herokuapp.com/blog');
        const { data } = await response;
        setPostData(data.reverse());
        setLoading(false)
        }
    
    useEffect(()=>getData(), [])

    return <>
    <section className={styles.mainHolder}>
        <h1 className={styles.h1}>Blog</h1>

        {
            postData.map((post)=><BlogCard key={post.id} post={post} loading={loading}/>)
        }
    </section>
    </>
}


const BlogCard = ({ post, loading })=>{
    if(loading){
        return <h2 className={styles.loading}>Loading...</h2>
    }else{
        return <section className={styles.blogCard} style={{backgroundImage: `url(${post.imageURL})`}}>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <p className={styles.postDescription}>{post.body.replace(/<[^>]*>?/gm, '').slice(0, 65)}.....</p>
        </section>
    }
}

export default MainBlogPage;