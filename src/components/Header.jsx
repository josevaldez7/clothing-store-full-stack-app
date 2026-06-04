import '../styles/Header.css'
import logo from '../assets/janetscurvyfashionlogo.jpg'

function Header(){

    return (
        <header>
            <div className = "header">
                <h1 className = "headerTitle"> Janet's Curvy Fashion</h1>
                <img src={logo} className = "logo"></img>
            </div>
            <br></br>
            <p id="bienvenidosMessage">Bienvenidos a mi pagina de venta!  | 
                     Welcome to my sales page! </p>
            <nav className = "navBar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Quien Soy Yo? | Who Am I? </a></li>
                    <li><a href="#productos">Productos | Products</a></li>
                    <li><a href="#contact">Contactenme | Contact Me</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header