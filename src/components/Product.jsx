import products from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import {useState} from 'react'
import '../styles/Products.css'

function Product () {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const updateSelectedCategory = (e) => {
        setSelectedCategory(e.target.value);
    }

    const filteredProducts = selectedCategory == "all" ? products : 
        products.filter((product) => product.category === selectedCategory);

    return (
    <>
    <label className="radioGroup">
        <label>
            <input type="radio" name="category" value="all" onChange={updateSelectedCategory}/> All
        </label>
        <label>
            <input type="radio" name="category" value="Dresses" onChange={updateSelectedCategory}/> Dresses
        </label>
        <label>
            <input type="radio" name="category" value="Jeans" onChange={updateSelectedCategory}/> Jeans
        </label>
        <label>
            <input type="radio" name="category" value="Self-care" onChange={updateSelectedCategory}/> Self-Care
        </label>
        <label>
            <input type="radio" name="category" value="Jackets" onChange={updateSelectedCategory}/> Jackets
        </label>
        <label>
            <input type="radio" name="category" value="Shirts" onChange={updateSelectedCategory}/> Shirts
        </label>
    </label>

        <h1 id="productosHeading">Productos De Venta: </h1>
        <div className="productDetails">
          {filteredProducts.map((product) => (
            <ProductCard 
                key={product.id} 
                product={product}
                onViewDetails={() => setSelectedProduct(product)}
            />
          ))}
          <br></br>
            {selectedProduct && 
                <div className="modal">
                    <div className="inner-modal">
                        <h1>{selectedProduct.name}</h1>
                        <img src={selectedProduct.image} className="modalImage"></img>
                        <h3>Precio: ${selectedProduct.price}</h3>
                        <h3>Disponible? {selectedProduct.isAvailable ? "Si" : "No"}</h3>
                        <button onClick={() => setSelectedProduct(null)} id="closeButton">
                            Close
                        </button>
                    </div>
                </div>
            }

        </div>
    </>
    )
}

export default Product