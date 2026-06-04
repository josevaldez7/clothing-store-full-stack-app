import card from '../assets/janetContactCard.png'
import instagramLogo from '../assets/instagramLogo.png'
import facebookLogo from '../assets/facebookLogo.png'
import '../styles/Contact.css'

function Contact(){
    return (
        <div className = "mainContactContainer">
            <div id="leftSideContact">
                <h1>Maneras de Contactarme | Ways to Contact Me </h1>
                <img src={card} alt="Card Image" className="images" id="contactCard"></img>
            </div>

            <div className = "instagramContact">
                <img src={instagramLogo} alt="Instagram Logo" className="images"></img>
                <a href="https://www.instagram.com/janet_curvyfashion/" className="links">Instagram</a>
            </div>
            <div className="facebookContact">
                <img src={facebookLogo} alt="Facebook Logo" className="images"></img>
                <a href="https://www.facebook.com/p/Janets-Curvy-Fashion-100087677370306" className="links">Facebook</a>
            </div>
        </div>
    )
}

export default Contact