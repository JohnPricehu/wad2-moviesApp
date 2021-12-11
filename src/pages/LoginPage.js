import React, { useState } from "react";


const Login =(props) =>{
            const {
                handleLogin,
                handleSignup,
                emailError,
                passwordError
            }=props;
            const [email, 
                setEmail,
            ] = useState("");
            const [password,
                setPassword,
            ] = useState("");
            const [hasAccount,
                setHasAccount,
            ] = useState("");
            // const [emailError,setEmailError] = useState("");
            // const [passwordError,setPasswordError] = useState("");
    return(
        <section className ="login">
           <div className = "loginContainer">
                <label>Username</label>
                <input type ="text" 
                        autoFocus 
                        required value={email} 
                        onChange={(e)=> setEmail(e.target.value)}
                />
                
                <p className ="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password"
                         required value={password}
                         onChange={(e)=> setPassword(e.target.value)}/>
                <p className ="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>login</button>
                        <p>Don't have account?<span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>Have an account?<span onClick={()=>setHasAccount(!hasAccount)}>login</span></p>
                        </>
                    )}
                </div>
            </div>
        </section> 
   );

};
export default Login;