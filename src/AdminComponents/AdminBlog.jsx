import FancyButton from '../AdminDash&FancyButton/FancyButton'
import TableGenerator from './TableGenerator';
import '../AdminDash&FancyButton/fancyButton.css'

export const AdminBlog = ()=>{
       
    return <>
    <main>
        <FancyButton
            buttonColor="#8BE5AF"
            dark={false}
            buttonContent="ADD NEW"
            buttonFunction={()=>{
                // Redirect to CreatePost
            }}/>

        <TableGenerator
            endPoint="blog"/>
    </main>
    </>
}

export default AdminBlog;