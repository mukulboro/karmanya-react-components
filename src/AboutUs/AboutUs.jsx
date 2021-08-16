import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import sliderImage1 from '../images/sliderImage1.jpg'
import sliderImage2 from '../images/sliderImage2.JPG'
import sliderImage3 from '../images/sliderImage3.jpg'
import { useState } from 'react'

export const AboutUs = () => {
    return <>
    <h1>About Us</h1>
    <HeadSlider/>
    </>
}


const HeadSlider = ()=>{
    const headerContent1 = {
        title: "This is Karmanya",
        subtitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate culpa voluptates facilis dolore sequi? Mollitia, eos quibusdam? Aliquam, iste a!",
        image: sliderImage1
    }

    const headerContent2 = {
        title: "This is Another Slide",
        subtitle: "The header illustration slider is a good example of hero headers. With the illustrations you can grab the visitors’ attention, and with the CTAs you can.",
        image: sliderImage2
    }

    const headerContent3 = {
        title: "This is The Final Slide",
        subtitle: "I'm leaving this comment in here so after a month or a year when someone likes it I get reminded of this song",
        image: sliderImage3
    }

    const sliderContent = [headerContent1, headerContent2, headerContent3]

    const [sliderContentNumber, setSliderContentNumber] = useState(0);

    const clickHandleLeft = ()=>{
        if(sliderContentNumber !== 0){
            setSliderContentNumber(sliderContentNumber-1);
        }else{
            setSliderContentNumber(sliderContent.length - 1);
        }
    }

    const clickHandleRight = ()=>{
        if(sliderContentNumber < sliderContent.length-1){
            setSliderContentNumber(sliderContentNumber+1)
        }else{
            setSliderContentNumber(0);
        }
    }


    return <section id="headSlider" style={{backgroundImage:`url(${sliderContent[sliderContentNumber].image})`}}>
    
        <main className="headerContent">
            <div className="iconLeft icon" onClick={clickHandleLeft}>
            <FontAwesomeIcon icon={faArrowCircleLeft}/>
            </div>

            <div className="textMiddle">
            <h2>{sliderContent[sliderContentNumber].title}</h2>
            <p>{sliderContent[sliderContentNumber].subtitle}</p>
            </div>

            <div className="iconRight icon" onClick={clickHandleRight}>
            <FontAwesomeIcon icon={faArrowCircleRight}/>
            </div>
        </main>
    </section>
}

export default AboutUs
