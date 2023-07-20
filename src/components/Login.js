import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
    const [login, setLogin] = useState();
    var Navigate = useNavigate();
    const updateLogin = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setLogin({ ...login, [name]: value });
    }
    const onLogin = (event) => {
        event.preventDefault();
        console.log(login);
        axios.post("https://crudcrud.com/api/06d8c96cab244497b51064c18e1dc47c/login", login).then(
            response => {
                console.log("data saved", response);
                if (response.request.status == 201) {
                    Navigate("/Dashboard");
                }
            },
            error => {
                console.log("data not saved", error);
            }
        )
    }
    return (
        <div>
            {/* <h1>login</h1> */}
            <div className="container mt-3">
                <form>
                    {/* <h1>IM  in Login component</h1> */}
                    <div className="row">
                        <div className="col">
                            <input onChange={updateLogin} type="text" className="form-control" placeholder="Enter username" name="username" />
                        </div><br></br><br></br>
                        <div className="col">
                            <input onChange={updateLogin} type="password" className="form-control" placeholder="Enter password" name="pswd" />
                        </div><br></br><br></br>
                        <div className="col">
                            <button onClick={onLogin} className="btn btn-primary">LOGIN</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;