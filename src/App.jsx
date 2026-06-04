import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ProductCard from './components/ProductCard.jsx'
import products from './data/products.js'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

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
        <h1 id="productosHeading">Productos De Venta: </h1>
        <div className="productDetails">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
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
