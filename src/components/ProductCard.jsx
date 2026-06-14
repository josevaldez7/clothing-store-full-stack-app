
function ProductCard(props){
    return (
            <div className="productCard">
                <h2 className = "productTitle">{props.product.name}</h2>
                <img className = "productImage"src={props.product.image} alt="Product Picture"></img>
                <button onClick={props.onViewDetails}>
                    View Product Details
                </button>
            </div>
    )
}

export default ProductCard