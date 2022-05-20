import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";
import { useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.getcountapp.com/api/v1/authenticate"

export const RequireAuth = ({children}) =>{
    const auth = useAuth()

    useEffect(()=>{
        let credentials = JSON.parse(localStorage.getItem("credentials"))
        axios
            .post(API_URL,credentials)
            .then((response) => {
                auth.setData(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                auth.setLoading(false);
                if(!auth.data){
                    return <Navigate to="/login" />
                }
            });
        }
    ,[])

    if(!JSON.parse(localStorage.getItem("token"))){
        return <Navigate to="/login" />
    }

    return children
}