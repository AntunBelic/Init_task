import "../CSS/Home.css";
import { useAuth } from "./Auth";

function Home() {
  const { data, loading, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="home_container">
      {loading ? (
        <div className="home_loading">
          <div className="mult2rect mult2rect1"></div>
          <div className="mult2rect mult2rect2"></div>
          <div className="mult2rect mult2rect3"></div>
          <div className="mult2rect mult2rect4"></div>
          <div className="mult2rect mult2rect5"></div>
        </div>
      ) : (
        <h1 className="home_title">
          {data?.firstName} {data?.lastName}
        </h1>
      )}
      <button className="home_btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Home;
