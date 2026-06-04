import picture from '../assets/janetAboutMePicture.png'
import '../styles/About.css'

function About(){
    return (
    <div className = "aboutContainer">
        <p id="aboutMeInfo">Hola todos! Mi nombre es Janet Fernandez, y este es mi pequeno negocio basado aqui en Watsonville, California. 
            Toda mi vida he tenido la ilusión de iniciar mi propio negocio. Siento que tengo el carisma y el potencial de 
            lograrlo pero por una cosa u otra no había podido emprender este sueño. Ahora poco a poco, despacito aquí voy dándome 
            a conocer y sé que algún día echándole muchas ganas,mucho empeño, tiempo, dedicación, ánimo y mucho entusiasmo Llegaré lejos 
            y lograré mi sueño. Los sueños se pueden cumplir solo hay que tener fe, pasiencia y confiar en el proceso🫶

        <br></br> <br></br>
            Hello everyone! My name is Janet Fernandez, and this is my small business based here in Watsonville, California. For my entire life, 
            I have dreamed of starting my own business. I feel that I have the charisma and potential to make it happen, but for one reason or another, 
            I had not been able to pursue this dream. Now, little by little, step by step, I am beginning to make myself known, and I know that one day, 
            with hard work, dedication, time, effort, determination, and lots of enthusiasm, I will go far and achieve my dream. Dreams can come true—you 
            just need to have faith, patience, and trust in the process. 🫶
        </p>
        <img src={picture} id="aboutPicture"></img>
    </div>
    )
}

export default About