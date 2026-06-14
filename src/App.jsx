import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Product from './components/Product.jsx'

function App() {
  return (
    <div>

    <section id="home">
      <Header/>
    </section>

    <section id="about">
      <About/> 
    </section>
    
    <hr></hr>

    <section id="productos">
      <Product />
    </section>
    <hr></hr>


    <section id="contact">
          <Contact/> 
    </section>

      <hr></hr>
      <Footer/>
    </div>
  )
}

export default App
