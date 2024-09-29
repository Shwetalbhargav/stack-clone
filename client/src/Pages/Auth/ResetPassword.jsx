import React, {useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ResetPassword =() =>{
    const[password, setPassword] = useState('');
    const[message, setMessage] = useState('');
    const location = useLocation();
    const token = new URLSearchParams(location.search).get('token');
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await axios.post(`/api/auth/reset-password?token=${token}`, {password});
            setMessage('Password reset successfully!')
        }
        catch (error){
            setMessage('Error Setting password')
        }
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Reset Password</h2>
                <input 
                    type="text"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                 />
             <button type="submit">Submit</button>
             </form>
             {message&&<p>{message}</p>}
        </div>
    
    );
};

export default ResetPassword;

