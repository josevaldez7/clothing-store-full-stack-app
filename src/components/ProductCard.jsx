function ProductCard(props){
    return (
        <div className="productDetails">
            <h2>Name: {props.name}</h2>
            <p>Price: {props.price}</p>
            <p>Available: {props.isAvailable ? "Yes" : "No"}</p>
        </div>
    )
}

export default ProductCard