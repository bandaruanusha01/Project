import { useState } from 'react';
import axios from 'axios';
function Register() {
    const [register, setRegister] = useState();
    const updateState = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setRegister({ ...register, [name]: value });
    }
    const onRegister = (event) => {
        event.preventDefault();
        console.log(register);
        axios.post("https://crudcrud.com/api/8051f07096e64a4fb67293a2359a45b1/register", register).then(
            response => {
                console.log("saved the data", response);
            },
            error => {
                console.log("data not saved", error);
            }
        )
    }
    return (
        <div>
            <div className="container mt-3">
                <form>
                    <div className="row">
                        <div className="col">
                            <input onChange={updateState} type="text" className="form-control" placeholder="Enter email" name="email" />
                        </div>
                        <div className="col">
                            <input onChange={updateState} type="text" className="form-control" placeholder="Enter username" name="username" />
                        </div>
                        <div className="col">
                            <input onChange={updateState} type="password" className="form-control" placeholder="Enter password" name="pswd" />
                        </div>
                        <div className="col">
                            <button onClick={onRegister}>REGISTER</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register;