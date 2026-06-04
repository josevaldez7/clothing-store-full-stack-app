import products from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'


function Product () {
    return (
    <>
        <h1 id="productosHeading">Productos De Venta: </h1>
        <div className="productDetails">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
    </>
    )
}

export default Product