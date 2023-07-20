import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Products from './Products';
import Dashboard from './Dashboard';
import ProductView from './ProductView';
import Cart from './Cart';
function Navbar() {
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/Home">Home</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Products">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Cart">Cart</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/Home" element={<Home></Home>}></Route>
                    <Route exact path="/Login" element={<Login></Login>}></Route>
                    <Route exact path="/Register" element={<Register></Register>}></Route>
                    <Route exact path="/Products" element={<Products></Products>}></Route>
                    <Route exact path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
                    <Route exact path="/ProductView" element={<ProductView></ProductView>}></Route> 
                    <Route exact path="/Cart" element={<Cart></Cart>}></Route> 

                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Navbar;