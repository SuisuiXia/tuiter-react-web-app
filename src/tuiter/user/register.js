import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as service from "../services/auth-service";

function RegisterScreen()  {
    const [newUser, setNewUser] = useState({});
    const navigate = useNavigate();
    const register = () => 
        service.register(newUser)
            .then(() => navigate("../profile"))
            .catch(e => alert(e));
    
    return (
        <div>
            <h1>
                Register
            </h1>
            <div className="mt-2">
                <label>First name</label>
                <input className="form-control" type="text" onChange={(e) =>
                setNewUser({...newUser, firstName: e.target.value})
            }/>
            </div>
            <div className="mt-2">
                <label>Last name</label>
                <input className="form-control" type="text" onChange={(e) =>
                setNewUser({...newUser, lastName: e.target.value})
            }/>
            </div>
            <div className="mt-2">
                <label>Username</label>
                <input className="form-control" type="text" onChange={(e) =>
                setNewUser({...newUser, username: e.target.value})
            }/>
            </div>
            <div className="mt-2">
                <label>Password</label>
                <input className="form-control" type="password" onChange={(e) =>
                setNewUser({...newUser, password: e.target.value})
            }/>
            </div>
            <div>
                <button className="btn btn-primary mt-2" onClick={register}>Signup</button>

            </div>
            
        </div>

);
} 
export default RegisterScreen;