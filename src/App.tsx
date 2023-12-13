import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import DashboardPage from "./pages/Dashboard";
import { Link } from "react-router-dom";
import { useState } from "react";

function HomePage() {
  return (
    <div id="destiny-choice-container">
      <h1>Choose your destiny</h1>
      <div id="button-container">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (successful) => {
    setIsLoggedIn(successful);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLoginSuccess={handleLogin} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={isLoggedIn ? <DashboardPage /> : <Link to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
