import "./ProductView.css";
function ProductView() {

    if(localStorage.getItem("cart")==null){//if cart should be empty add the products 
       localStorage.setItem("cart", JSON.stringify([]));
    }
    const addToCart=(product)=>{
       var cartItems = JSON.parse(localStorage.getItem("cart"));
       cartItems.push(product);
       localStorage.setItem("cart", JSON.stringify(cartItems));
       alert("items added successfully");
    }
    var product=JSON.parse(localStorage.getItem("currentProduct"));

    return (
        <div>
            <h1>Productview</h1>        
            <div class="container">
                <div class="card">
                    <div class="container-fliud">
                        <div class="wrapper row">
                            <div class="preview col-md-6">

                                <div class="preview-pic tab-content">
                                    <div class="tab-pane active" id="pic-1"><img src={product.images[0]} /></div>
                                </div>

                            </div>
                            <div class="details col-md-6">
                                <h3 class="product-title">{product.title}</h3>
                                <div class="rating">
                                    <div class="stars">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                                <p class="product-description">{product.description}</p>
                                <h4 class="price">current price: <span>{product.price}</span></h4>

                                <div class="action">
                                    <button onClick={()=>addToCart(product)} class="add-to-cart btn btn-default" type="button">add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductView;