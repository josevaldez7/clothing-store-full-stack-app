import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ProductCard from './components/ProductCard.jsx'
import products from './data/products.js'
import About from './components/About.jsx'

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
        <h2>Productos de venta: </h2>
        <div className="productDetails">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
    </section>
    <hr></hr>


    <section id="contact">
          
    </section>

      <hr></hr>
      <Footer/>
    </div>
  )
}

export default App
