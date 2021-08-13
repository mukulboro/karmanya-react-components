import { CKEditor } from '@ckeditor/ckeditor5-react';
import MyEditor from 'ckeditor5-custom-build/build/ckeditor';
import { useState } from 'react';
import axios from 'axios';
import qs from 'qs'

const editorConfiguration = {
    toolbar: ['heading', "|" , 'bold', 'italic', 'underline' , 'alignment', 'link', "|" ,'undo', 'redo', 'numberedList', 'bulletedList', "|" , 'blockQuote' , 'insertTable' ]
};

export const Editor =({endpoint})=>{
    
    const apiURL = "https://karmanya.herokuapp.com"
    const [postBody, setPostBody] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [postImage, setPostImage] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(postImage===""){
            setPostImage("https://scontent.fktm10-1.fna.fbcdn.net/v/t1.18169-9/15193537_651087658405974_5072608456812765646_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=08hjazztBgIAX8gRDDi&_nc_ht=scontent.fktm10-1.fna&oh=7ea0810c3a44bde83dffe5814272f136&oe=613A8CCC")
        }
        const {data} = await axios.post(`${apiURL}/${endpoint}`, qs.stringify({title: postTitle, body: postBody, imageURL: postImage}))
        console.log(data);
        if(data.isPostAdded){
            alert("Your Post is added")
            setPostBody("");
            setPostTitle("");
            setPostImage("");
        }else{
            alert("Server Error")
        }
    }
    return<>
    <div id="holder">
        <h1>Create New Post</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Post Title" value={postTitle} onChange={(e)=>setPostTitle(e.target.value)} required/>
            <input type="text" placeholder="Image Link" value={postImage} onChange={(e)=>setPostImage(e.target.value)} required/>
            <section id="textbox">
                <CKEditor
                editor={ MyEditor }
                config={ editorConfiguration }
                data= {postBody}
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setPostBody(data)
                    } }
                
                />
            </section>

            <button id="submit">
                SUBMIT
            </button>
        </form>
    </div>
    </>
}

export default Editor;