import nepalMap from "./images/nepalMap.png"
import headerImage1 from "./images/headerImage1.jpg"
import headerImage2 from "./images/headerImage2.jpg"
import headerImage3 from "./images/headerImage3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown} from '@fortawesome/free-solid-svg-icons'

import { useState } from "react";

function Header() {
  const imageList = [headerImage1, headerImage2, headerImage3]
  const [headerImage, setHeaderImage] = useState(headerImage1);

  (function componentDidMount(){
    imageList.forEach((image) => {
        new Image().src = image
    });
  }());
  
  const slideshow = ()=>{
    if(headerImage===headerImage1){
      setHeaderImage(headerImage2);
    }else if(headerImage===headerImage2){
      setHeaderImage(headerImage3)
    }else{
      setHeaderImage(headerImage1)
    }
  }

  setTimeout(slideshow, 4000);


  return (
    <>
    <div className="fullHeader">
      <div className="header">
      <div className="textHolder">
        <h1>A world where no child's life is torn apart by war.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates incidunt, mollitia beatae eaque temporibus veritatis consequatur. Corrupti autem est perspiciatis.</p>
        <button id="donateNow" onClick={()=>alert("In Development")}>Donate Now</button>
      </div>
      <img 
        src={nepalMap} 
        alt="nepal-map-overlay" 
        id="mapOverlay"
        style={{backgroundImage:`url("${headerImage}")`}}
        />
    </div>
    <section id="icon">
      <a href="#" id="downwardArrow">
        <FontAwesomeIcon icon={faArrowCircleDown}/>
      </a>
    </section>
    </div>

    </>
  );
}

export default Header;
