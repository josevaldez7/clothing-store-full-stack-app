
function ProductCard(props){
    return (
            <div className="productCard">
                <h2 className = "productTitle">{props.name}</h2>
                <img className = "productImage"src="https://placehold.co/200x200" alt="Product Picture"></img>
                <p>Precio: ${props.price}</p>
                <p>Disponible: {props.isAvailable ? "Si" : "No"}</p>
            </div>
    )
}

export default ProductCard