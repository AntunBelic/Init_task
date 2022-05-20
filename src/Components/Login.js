import { useAuth } from "./Auth"

function Login() {
    const auth = useAuth()
    return (
    <div>
        <h1>Login</h1>
        <form onSubmit={(e)=>auth.handleForm(auth.email,auth.pwd,e)}>
            <label>
                Username:
                <input type="text" onChange={(e)=>auth.setEmail(e.target.value)} value={auth.email} required />
            </label>
            <label>
                Password:
                <input type="text" onChange={(e)=>auth.setPwd(e.target.value)} required />
            </label>
            <button>Login</button>
        </form>
    </div>
    )
}

export default Login