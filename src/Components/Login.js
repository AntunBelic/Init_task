import "../CSS/Login.css"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./Auth"

function Login() {
    const {login,setEmail,setPwd,email,pwd,loading} = useAuth()
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
            {!loading?
            <button>Login</button>
            :<button>
                <div className="multiple1">
                    <div className="ball1"></div>
                    <div className="ball2"></div>
                    <div className="ball3"></div>
                </div>
            </button>}
        </form>
    </div>
    )
}

export default Login