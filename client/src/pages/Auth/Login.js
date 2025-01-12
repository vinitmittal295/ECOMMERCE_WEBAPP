
import React, { useState } from 'react';
import Layout from "./../../components/Layout/Layout.js";
import toast from 'react-hot-toast';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from "axios";
import { useAuth } from "../../context/Auth.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [auth, setAuth ] = useAuth();
  const navigate = useNavigate();
  const location=useLocation()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", { email, password });
      

      // Log the response to inspect it
      console.log("Login response from api:", res.data);

      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });

        // Save the token (and user data if needed) to localStorage
        localStorage.setItem("auth", JSON.stringify({
          user: res.data.user,
          token: res.data.token,
        }));

        // Navigate to the homepage or dashboard
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Login error from catch:", error);
      toast.error("An error showing from toast occurred during login . Please try again.");
    }
  };

  return (
    <Layout title="Login - Ecommerce App">
      <div className="form-container">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="form-control" 
              id="exampleInputEmail1" 
              placeholder="Enter your email" 
              required
            />
          </div>
          <div className="mb-3">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="form-control" 
              id="exampleInputPassword1" 
              placeholder="Enter password" 
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
