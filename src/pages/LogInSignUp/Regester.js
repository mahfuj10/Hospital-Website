import { createUserWithEmailAndPassword, getAuth,onAuthStateChanged, updateProfile  } from '@firebase/auth';
import userEvent from '@testing-library/user-event';
import React, { useImperativeHandle, useState  } from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import UseFirebase from '../../Hooks/UseFirebase';


const Regester = () => {

    const { setIsloading, handaleSignUp,googleSignIn, error ,userName, userEmail, userPassword } = useAuth();

    const handaleGoogelSignUp = () => {
        setIsloading(true)
                googleSignIn()
                 .then(() => {
                    
                 })
                 .finally(()=> setIsloading(false))
            }

   
    return (
      
        <div>
             <h4 className="mb-4">Sign Up</h4> <p>{error}</p>
             
           <input onChange={userName} placeholder=" Name" type="text" />
           <input onChange={userEmail}  placeholder=" Email" type="email" />
           <input onChange={userPassword}  placeholder=" Password" type="password" /><input onClick={handaleSignUp} type="submit" variant="danger" value="Sign Up" style={{backgroundColor:"#89ABE3"}}/>
          
           <small className="d-none d-lg-block">---------------- Or sign up with ----------------</small>
                <aside className="SocialIcon">
                    <span className="SignMethod"><i class="fab fa-facebook"></i></span>
                    <span className="SignMethod" onClick={handaleGoogelSignUp}><i class="fab fa-google"></i></span>
                </aside>
        </div>
    );
};

export default Regester;