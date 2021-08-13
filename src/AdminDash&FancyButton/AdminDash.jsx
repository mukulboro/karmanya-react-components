import { FancyButton } from "./FancyButton"

export const AdminDash = ()=>{

    const logoutHandle = ()=>{
        window.sessionStorage.removeItem("userSession");
        // TODO : Redirect to homepage
    }

    const portfolioHandle = ()=>{
        alert("Portfolio")
        // TODO: Redirect to admin portfolio page
    }

    const blogHandle = ()=>{
        alert("Blog")
        // TODO: Redirect to admin portfolio page
    }

    return <>
    <section id="mainHolder">
    <div className="leftPanel">
        <section id="leftPanelContent">
            <FancyButton
            buttonColor="#05396B"
            dark={true}
            buttonContent="PORTFOLIO"
            buttonFunction={portfolioHandle}/>
        </section>
    </div>
        
    <div className="rightPanel">
        <section id="rightPanelContent">
            <FancyButton
            buttonColor="#8BE5AF"
            dark={false}
            buttonContent="BLOG"
            buttonFunction={blogHandle}/>
        </section>
    </div>
    </section>
    <section id="logoutHolder" onClick={logoutHandle}>
        LOGOUT
    </section>
    </>
}

export default AdminDash;