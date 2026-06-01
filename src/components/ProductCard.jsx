function ProductCard(props){
    return (
        <div className="productDetails">
            <h2 className = "productTitle">Name: {props.name}</h2>
            <img className = "productImage"src="https://placehold.co/200x200" alt="Product Picture"></img>
            <p>Price: {props.price}</p>
            <p>Available: {props.isAvailable ? "Yes" : "No"}</p>
        </div>
    )
}

export default ProductCard