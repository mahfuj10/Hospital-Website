import {getAuth, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider, onAuthStateChanged ,signOut,updateProfile,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitalize from "../Firebase/FirebaseInitalize";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
firebaseInitalize();



const UseFirebase = () => {
    
    const [ isLoading, setIsloading ] = useState(true);

    const auth = getAuth();
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const [ user, setUser ] = useState({});

    const userName = e => {
        setName(e.target.value);
     }
     const userEmail = e => {
         setEmail(e.target.value);
     }
     const userPassword  = e => {
         setPassword(e.target.value);
     }

     const userDisplayname = () => {

        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }


    const userLogin = ( ) => {
  
        signInWithEmailAndPassword (auth, email, password)
        
        .then(result => {
          setUser(result.user)
        })
        .catch(error => {
          setError(error.message)
        })
      }

    const handaleSignUp = () => {

        if(password.length < 6){
            return;
        }
       else{
          createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            userDisplayname();
                setUser(result.user)
          }).catch(error => {
              setError(error.message)
          })
    }
    }

    const googleSignIn = () => {

 return   signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     setUser(result.user);
            // })
            // .catch(error => {
            //     setError(error.message);
            // })
    }
    

    const signWithFacebook = () => {

     return signInWithPopup(auth, facebookProvider)
            // .then(result => {
            //     setError(result.user)
            // })
            // .catch(error => {
            //     setError(error.message)
            // })
    }

useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
            setUser({});
        }
        setIsloading(false);
      });
},[])


      const LogOut = () => {
        setIsloading(true);
        signOut(auth)
         .then(()=>{
             setUser({})
         })
         .finally( () => setIsloading(false))
      }


return {
    googleSignIn,
    LogOut,
    user,
    error,
    signWithFacebook,
    userName,
    isLoading,
    setIsloading,
    userEmail,
    userPassword,
    userLogin,
    handaleSignUp

}


}

export default UseFirebase;
