export const FancyButton = ({buttonColor, dark, buttonContent, buttonFunction})=>{
    if(dark){
        var fontColor = "white"
    }else{
        fontColor = "black"
    }
    return <>
    <div className="fancyButton" onClick={buttonFunction} style={{backgroundColor: buttonColor, color: fontColor}}>
        {buttonContent}
    </div>
    </>
}

export default FancyButton