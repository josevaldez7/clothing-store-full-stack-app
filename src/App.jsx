import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ProductCard from './components/ProductCard.jsx'
import products from './data/products.js'

function App() {

  return (
    <div>
      <Header/>
      <p>Productos de venta: </p>
      <div className="productDetails">
        {products.map((product) => (
          <ProductCard key={product.id} name={product.name} 
            price={product.price} isAvailable={product.isAvailable}/>
        ))}
      </div>
      <hr></hr>
      <Footer/>
    </div>
  )
}

export default App
