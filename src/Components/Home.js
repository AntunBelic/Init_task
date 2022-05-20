import { useNavigate} from 'react-router-dom';
import { useAuth } from './Auth'

function Home() {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout()
        navigate("/login")
    }
  return (
    <div>
        <h1>{auth?.data?.user?.firstName}{" "}{auth?.data?.user?.lastName}</h1>
        <button onClick={()=>handleLogout()}>Logout</button>
    </div>
  )
}

export default Home