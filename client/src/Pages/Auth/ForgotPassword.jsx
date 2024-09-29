import { useState } from "react"
import axios from "axios"

const ForgotPassword = () =>{
    const[emailorPhone, setEmailOrPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await axios.post('./api/auth/forgot-password', emailorPhone)
            setMessage('Password reset link sent successfully!');
            }
            catch(error){
                setMessage('Error sending password link.');
            }
    };

    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <h2>Forgot Password</h2>
                <input
                      type="text"
                      value={emailorPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      placeholder="Enter email or Phone number"
                      required
                />
                <button type="submit"></button>      
            </form>
            {message && <p>{message}</p>}
        </div>

    );
}
