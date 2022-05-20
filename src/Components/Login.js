import { useState} from "react"
import { useAuth } from "./Auth";

function Login() {
    const auth = useAuth()
    
    const [email,setEmail] = useState("")
    const [pwd,setPwd] = useState("")

    const handleForm = (email,pwd,e) =>{
        e.preventDefault();
        auth.setForm({
            username:email,
            password:pwd
        })
    }


    return (
    <div>
        <h1>Login</h1>
        <form onSubmit={(e)=>handleForm(email,pwd,e)}>
            <label>
                Username:
                <input type="text" onChange={(e)=>setEmail(e.target.value)} required />
            </label>
            <label>
                Password:
                <input type="text" onChange={(e)=>setPwd(e.target.value)} required />
            </label>
            <button>Login</button>
        </form>
    </div>
    )
}

export default Login