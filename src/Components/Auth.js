import {useState,createContext,useContext} from "react"
import axios from "axios"

export const AuthContext = createContext(null)

const API_URL = "https://api.getcountapp.com/api/v1/authenticate"

export const AuthProvider = ({children}) =>{  
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [email,setEmail] = useState("")
    const [pwd,setPwd] = useState("")

    const login = () =>{
            setLoading(true);
        return axios
            .post(API_URL,{
                username:email,
                password:pwd
            })
            .then((response) => {
                localStorage.setItem("token",JSON.stringify(response.data.token))
            })
            .catch((err) => {
                setError(err.response.data.errorMessage);
            })
            .finally(() => {
                setLoading(false);
            });
        }

    const logout = () => {
        setData(null)
        localStorage.clear()
    }

    return (
        <AuthContext.Provider value ={{login,logout,data,email,setEmail,pwd,setPwd,setData,error,loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}