import "../CSS/Login.css"
import { useNavigate} from "react-router-dom"
import { useAuth } from "./Auth"

function Login() {
    const {login,setEmail,setPwd,email,pwd,loading,error} = useAuth()
    const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault();
        login()
        .then(()=>{setEmail("");setPwd("")})
        .then(()=>(navigate("/", { replace: true })))    
    }

    

    return (
    <div className="login_container">
        <h1 className="login_title">Login</h1>
        {error && <p className="login_err_msg">{error}</p>}
        <form className="login_form" onSubmit={(e)=>handleLogin(e)}>
            <label className="login_label">
                Username:
                <input className="login_input" type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required />
            </label>
            <label className="login_label">
                Password:
                <input type="password" className="login_input" onChange={(e)=>setPwd(e.target.value)} value={pwd} required />
            </label>
            {!loading?
            <button className="login_btn"><span className="login_btn_text">Submit</span></button>
            :<button className="login_btn">
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