import { useState } from "react";
import axios from "axios";
function Cart() {
    const [state, setState] = useState(0);
    var cart;
    if (localStorage.getItem("cart") != null) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
    const removeCartItems = (id) => {
        var cart = JSON.parse(localStorage.getItem("cart"));
        cart.forEach((cartItems, i) => {
            if (cartItems.id == id) {
                cart.splice(i, 1)
            }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        setState(state + 1);
        // alert("hi")
    }

    const checkout = () => {
        var data = {
            amount: 25000,
            currency: "INR",
            receipt: ""
        }
        axios.post("https://crudcrud.com/api/06d8c96cab244497b51064c18e1dc47c/createOrder").then(
            response => {
                console.log("response", response);
            },
            error => {
                console.log(error);
            }
        )
    }

    const renderCartItems = () => {
        var list = cart.map(cartItems => {
            return <tr key={cartItems.id}>
                <td class="col-sm-8 col-md-6">
                    <div class="media">
                        <a class="thumbnail pull-left" href="#"> <img class="media-object" src={cartItems.images[0]} style={{ width: "72px", height: "72px" }} /> </a>
                        <div class="media-body">
                            <h4 class="media-heading">{cartItems.title}</h4>
                        </div>
                    </div></td>
                <td class="col-sm-1 col-md-1 text-center"><strong>${cartItems.price}</strong></td>
                <td class="col-sm-1 col-md-1">
                    <button onClick={() => removeCartItems(cartItems.id)} type="button" class="btn btn-danger">
                        <span class="glyphicon glyphicon-remove"></span> Remove</button></td>
            </tr>
        })
        return list;
    }
    return (
        <div>
            <h1>Cart</h1>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-10 col-md-offset-1">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th class="text-center">Price</th>
                                    <th class="text-center">Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderCartItems()}
                                {/* <tr>
                        <td class="col-sm-8 col-md-6">
                        <div class="media">
                            <a class="thumbnail pull-left" href="#"> <img class="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style={{width: "72px", height: "72px"}}/> </a>
                            <div class="media-body">
                                <h4 class="media-heading">Product name</h4>
                            </div>
                        </div></td>
                        <td class="col-sm-1 col-md-1" style={{textAlign:"center"}}>
                        <input type="email" class="form-control" id="exampleInputEmail1" value="3"/>
                        </td>
                        <td class="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
                        <td class="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                        <td class="col-sm-1 col-md-1">
                        <button type="button" class="btn btn-danger">
                            <span class="glyphicon glyphicon-remove"></span> Remove
                        </button></td>
                    </tr> */}
                                {/* <tr>
                        <td class="col-md-6">
                        <div class="media">
                            <a class="thumbnail pull-left" href="#"> <img class="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style={{width:"72px", height: "72px"}}/> </a>
                            <div class="media-body">
                                <h4 class="media-heading">Product name</h4>
                               
                            </div>
                        </div></td>
                        <td class="col-md-1" style={{textAlign:"center"}}>
                        <input type="email" class="form-control" id="exampleInputEmail1" value="2"/>
                        </td>
                        <td class="col-md-1 text-center"><strong>$4.99</strong></td>
                        <td class="col-md-1 text-center"><strong>$9.98</strong></td>
                        <td class="col-md-1">
                        <button type="button" class="btn btn-danger">
                            <span class="glyphicon glyphicon-remove"></span> Remove
                        </button></td>
                    </tr> */}
                                <tr>
                                    <td>  </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td><h5>Subtotal</h5></td>
                                    <td class="text-right"><h5><strong>$</strong></h5></td>
                                </tr>
                                <tr>
                                    <td>  </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td><h5>Estimated shipping</h5></td>
                                    <td class="text-right"><h5><strong>$</strong></h5></td>
                                </tr>
                                <tr>
                                    <td>  </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td><h3>Total</h3></td>
                                    <td class="text-right"><h3><strong>$</strong></h3></td>
                                </tr>
                                <tr>
                                    <td>  </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td>
                                        <button type="button" class="btn btn-default">
                                            <span class="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                                        </button></td>
                                    <td>
                                        <button onClick={() => checkout()} type="button" class="btn btn-success">
                                            Checkout <span class="glyphicon glyphicon-play"></span>
                                        </button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;


