import { faPhoneAlt, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ContactUs = () => {
    return <>
        
            <h1>Contact Us</h1>
        <section id="mainHolder">
            <div id="miniHolder">
                <div id="mapHolder">
                <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7064.04741863965!2d85.34487602704033!3d27.716554228971024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197d9d23f7ed%3A0x2724281b4393865d!2sChabahil%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1629019949401!5m2!1sen!2snp"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                />
            </div>

            <div id="detailHolder">
                <DetailCard text="+977-9865236985" icon={faPhoneAlt}/>
                <DetailCard text="Chabahil, Kathmandu, Nepal" icon={faMapMarkerAlt} />
                <DetailCard text="myemail@domain.com" icon={faEnvelope} />
            </div>
            </div>
        </section>
    </>
}


const DetailCard = ({ text, icon }) => {
    return (
        <div className="detailCard">
            <span className="icon"><FontAwesomeIcon icon={icon}/></span>
            <p>{text}</p>
        </div>
    )
}


export default ContactUs;
