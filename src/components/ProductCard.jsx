
function ProductCard(props){
    return (
            <div className="productCard">
                <h2 className = "productTitle">{props.product.name}</h2>
                <img className = "productImage"src={props.product.image} alt="Product Picture"></img>
                <p>Precio: ${props.product.price}</p>
                <p>Disponible: {props.product.isAvailable ? "Si" : "No"}</p>
            </div>
    )
}

export default ProductCard