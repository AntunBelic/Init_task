import {useState,useEffect,createContext,useContext} from "react"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"

export const AuthContext = createContext(null)

const API_URL = "https://api.getcountapp.com/api/v1/authenticate"

export const AuthProvider = ({children}) =>{
    //login state

    let form = {}
    
    const navigate = useNavigate()

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [email,setEmail] = useState("")
    const [pwd,setPwd] = useState("")


    useEffect(()=>{
        let credentials = JSON.parse(localStorage.getItem("credentials"))
        axios
            .post(API_URL,credentials)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
        }
    ,[])

    const handleForm = (email,pwd,e) =>{
        e.preventDefault();
        form = {
            username:email,
            password:pwd
        }
            setLoading(true);
        axios
            .post(API_URL,form)
            .then((response) => {
                setData(response.data);
                localStorage.setItem("token",JSON.stringify(response.data.token))
                localStorage.setItem("credentials",JSON.stringify(form))
                navigate("/")
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
        }
        console.log(data)

    //user state
    const [user,setUser]= useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setData(null);
        localStorage.clear()
    }

    return (
        <AuthContext.Provider value ={{user,login,logout,data,handleForm,email,setEmail,pwd,setPwd}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}