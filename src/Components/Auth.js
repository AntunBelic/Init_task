import {useState,useEffect,createContext,useContext} from "react"
import axios from "axios"

export const AuthContext = createContext(null)

const API_URL = "https://api.getcountapp.com/api/v1/authenticate"

export const AuthProvider = ({children}) =>{

    //login state
    const [form,setForm] = useState({
        username:"",
        password:""
    })

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
    axios
        .post(API_URL,form)
        .then((response) => {
            setData(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
    },[form])

    console.log(data)

    //user state
    const [user,setUser]= useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value ={{user,login,logout,setForm,form}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}