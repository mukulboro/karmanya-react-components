import { useState, useEffect } from "react"
import axios from 'axios';

export const TableGenerator = ({endPoint})=>{
    const [postData, setPostData] = useState(null)
    const [loading, setLoading] = useState(true)

    const apiURL = `https://karmanya.herokuapp.com/${endPoint}`

    const deletePost = async (id)=>{
        const deleteURL = `https://karmanya.herokuapp.com/${endPoint}?workID=${id}&postID=${id}`
        await axios.delete(deleteURL, {workID: id, postID: id})
        window.location.reload()
    }

     useEffect(()=>{
        const getData = async ()=>{
            const {data} = await axios.get(apiURL);
            setPostData(data.reverse());
            setLoading(false);
        }
        getData();
    },[])

    if(loading){
        return <h1 className="loading">Loading</h1>
    }else{
        return <table>
        <thead>
            <tr>
                <th>Post Name</th>
                <th>Post Date</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                postData.map((post)=>{
                    var postDate = new Date(Number(post.id))
                    return <tr key={post.id}>
                        <td>{post.title}</td>
                        <td>{`${postDate.getFullYear()}/${postDate.getMonth()}/${postDate.getDay()}`}</td>
                        <td><section className="actionButton" id="edit">Edit</section></td>
                        <td><section className="actionButton" id="delete" onClick={()=>{deletePost(post.id)}}>Delete</section></td>
                    </tr>
                })
            }
        </tbody>
    </table>
    }
}




export default TableGenerator;