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
            <p id="bienvenidosMessage">Bienvenidos a mi pagina de venta!</p>
            <nav className = "navBar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Quien Soy Yo?</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contactenme</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header