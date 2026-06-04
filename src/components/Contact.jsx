import card from '../assets/janetContactCard'

function Contact(){
    return (
        <div className = "mainContactContainer">
            <div id="leftSideContact">
                <h2>Maneras de Contactarme: </h2>
                <img src={card} alt="Card Image"></img>
            </div>

            <div className = "rightSideContact">

            </div>
        </div>
    )
}

export default Contact