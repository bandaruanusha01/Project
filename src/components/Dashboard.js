import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Dashboard() {
    if(localStorage.getItem("cart")==null){
        localStorage.setItem("cart", JSON.stringify([]));
    }
    var Navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(
        () => {
            axios.get("https://dummyjson.com/products").then(
                response => {
                    console.log(response);
                    setProducts(response.data.products);
                    console.log(products);
                },
                error => {
                    console.log(error);
                }
            )
        }, []);

    const navigateToProductView = (product) => {
        localStorage.setItem('currentProduct', JSON.stringify(product));
        Navigate("/ProductView");
    }

    const renderList = () => {
        let list = products.map(product => {
            var productsWithUI = <div className="col">
                <div className="card" onClick={()=>navigateToProductView(product)}>
                    <img width="200px" height="200px" src={product.images[0]}
                        className="card-img-top" alt="evil death"></img>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product.title} {product.name}</h5>
                </div>
            </div>
            return productsWithUI;
        })
        return list;
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.length > 0 ? renderList() : <h1>loading......</h1>}
            </div>
        </div>
    )
}
export default Dashboard;

// function Dashboard(){
//     return(
//         <div>
//             <h1>Dashboard</h1>
//         </div>
//     )
// }
// export default Dashboard;
