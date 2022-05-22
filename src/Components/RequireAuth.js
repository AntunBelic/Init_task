import { Navigate, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "./Auth";

const API_URL = "https://api.getcountapp.com/api/v1/users/me"

export const RequireAuth = ({children}) =>{
    
    const {setData,setLoading} = useAuth();
    const navigate = useNavigate();


    useEffect(()=>{
        let credentials = JSON.parse(localStorage.getItem("token"))
        const AuthStr = 'Bearer '.concat(credentials)
        
        if(credentials){
            setLoading(true)
            axios
            .get(API_URL,{ headers: { Authorization: AuthStr } })
            .then((response) => {
                setData(response.data);
            })
            .catch(() => {
                localStorage.clear()
                navigate("/login")
            })
            .finally(() => {
                setLoading(false);
            });
        }
        
        }
    ,[setData,navigate,setLoading])

    if(!JSON.parse(localStorage.getItem("token"))){
        return <Navigate to="/login" />
    }

    return children
}


//john@doe.com