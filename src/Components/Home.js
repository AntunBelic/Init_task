import { useAuth } from './Auth'

function Home() {
    const auth = useAuth();

    const handleLogout = () => {
        auth.logout()
    }
  return (
    <div>
        <h1>{auth?.data?.firstName}{" "}{auth?.data?.lastName}</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home