import { useNavigate } from "react-router-dom"
import { useAuth } from "./Auth"

function Login() {
    const {login,setEmail,setPwd,email,pwd} = useAuth()
    const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault();
        login()
        .then(()=>{setEmail("");setPwd("")})
        .then(()=>(navigate("/")))       
    }

    return (
    <div>
        <h1>Login</h1>
        <form onSubmit={(e)=>handleLogin(e)}>
            <label>
                Username:
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} required />
            </label>
            <label>
                Password:
                <input type="text" onChange={(e)=>setPwd(e.target.value)} value={pwd} required />
            </label>
            <button>Login</button>
        </form>
    </div>
    )
}

export default Login