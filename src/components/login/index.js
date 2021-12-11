import "./login.css";
import React,{useState, useEffect} from "react";
// Add the Firebase services that you want to use
import fire from "../../firebase";
import Login from "../../pages/LoginPage";
import App from "../../index1";
import { withRouter } from 'react-router-dom';

export const LoginApp=() =>{
    const [user,setUser]=useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [hasAccount,setHasAccount] =  useState("false");
    
    const clearInputs =() =>{
        setEmail('');
        setPassword('');
    }
    const clearErrors =() =>{
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin =()=>{
        clearErrors();
        fire
           .auth()
           .signInWithEmailAndPassword(email,password)
           .catch(
                err=>{
                  switch(err.code){
                   case "auth/invalid-email":
                   case "auth/user-disabled":
                   case "auth/user-not-found":
                      setEmailError(err.message);
                      break;
                   case "auth/wrong-password":
                      setPasswordError(err.message);
                      break;
                   default:
                        break;
                  } 
                });
    };

    const handleSignup =() =>{
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch(
            err=>{
               switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invaild-email":
                   setEmailError(err.message);
                   break;
                case "auth/weak-password":
                   setPasswordError(err.message);
                   break;
                default:
                    break;
               } 
            });
    };
    
    const handleLogout =() =>{
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user)=>{
            if (user){
                clearInputs();
                setUser(user);
            }else{
                setUser("");
            }
        });
    };

    useEffect(()=>{
        authListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <div className = "App">
            {user ? ( 
              <App handleLogout={handleLogout}/>
            ):(
                <Login
                email={email} 
                setEmail ={setEmail} 
                password ={password} 
                setPassword ={setPassword}
                handleLogin ={handleLogin}
                handleSignup ={handleSignup}
                hasAccount ={hasAccount}
                setHasAccount={setHasAccount}
                emailError = {emailError}
                passwordError ={passwordError}
                />
            )}
        </div>
    );
};
export default withRouter(LoginApp);
