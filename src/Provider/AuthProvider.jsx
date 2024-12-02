import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged ,signOut,signInWithEmailAndPassword} from "firebase/auth";
import app from "../Firebase/firebase.init";

export const authContex = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)
console.log(loading,user)
  const auth = getAuth(app);

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unscbcribe = onAuthStateChanged(auth,currentuser=>{
        setUser(currentuser)
        setLoading(false)
    })
    return ()=>{
        unscbcribe()
    }
  }, []);
  const singOutUser = ()=>{
    return signOut(auth)
  }
  const logIn =(email,password)=>{
    
    return signInWithEmailAndPassword(auth, email, password)

  }

  const values = {
    user,
    creatUser,
    singOutUser,
    logIn,
    loading
  };

  return <authContex.Provider value={values}>{children}</authContex.Provider>;
};

export default AuthProvider;
