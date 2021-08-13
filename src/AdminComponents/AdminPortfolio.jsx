import FancyButton from '../AdminDash&FancyButton/FancyButton'
import TableGenerator from './TableGenerator';

export const AdminPortfolio = ()=>{
       
    return <>
    <main>
        <FancyButton
            buttonColor="#05396B"
            dark={true}
            buttonContent="ADD NEW"
            buttonFunction={()=>{
                // Redirect to CreateWork
            }}/>

        <TableGenerator
            endPoint="work"/>
    </main>
    </>
}

export default AdminPortfolio;