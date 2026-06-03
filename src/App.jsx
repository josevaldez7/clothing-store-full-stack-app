import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ProductCard from './components/ProductCard.jsx'

function App() {

const products = [
  { id: 1, 
    name: "Dress",
    price: 25,
    isAvailable: true
  }, 
  { id: 2,
    name: "Jeans",
    price: 30,
    isAvailable: true
  },
  {
    id: 3,
    name: "Shoes",
    price: 50,
    isAvailable: false
  }
];

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
