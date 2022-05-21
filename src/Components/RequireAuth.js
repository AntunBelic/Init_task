import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "./Auth";

const API_URL = "https://api.getcountapp.com/api/v1/users/me"

export const RequireAuth = ({children}) =>{
    
    const {setData} = useAuth();

    useEffect(()=>{
        let credentials = JSON.parse(localStorage.getItem("token"))
        const AuthStr = 'Bearer '.concat(credentials)

        axios
            .get(API_URL,{ headers: { Authorization: AuthStr } })
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    ,[setData])

    if(!JSON.parse(localStorage.getItem("token"))){
        return <Navigate to="/login" />
    }

    return children
}


//john@doe.com