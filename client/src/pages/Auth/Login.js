// // import React from 'react'
// import React,{useState} from 'react'
// import Layout from "./../../components/Layout/Layout.js"
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom'
// import axios from "axios"
// import { useAuth } from "../../context/Auth.js"

// const Login = () => {
//     const[email,setEmail]=useState("")
//     const[password,setPassword]=useState("")
   
//     const {auth,setAuth}=useAuth()
//     console.log(auth);
//     const navigate=useNavigate()

//     const handlseSubmit=async (e)=>{
//         e.preventDefault()
//         try {
//             const res=await axios.post("/api/v1/auth/login",{email,password})
//             console.log("vinit",res.data.token);
            
//             if (res && res.data.success) {
//                 toast.success(res.data && res.data.message);
//                 setAuth({
//                   ...auth,

//                   user:res.data.user,
//                   token:res.data.token,
//                 })

//                 localStorage.setItem("auth",JSON.stringify(res.data))
                
//                 navigate("/")
//             } else {
//                 toast.error(res.data.message)
//             }
//         } catch (error) {
//             console.log(error)

            
//         }

//     }
//   return (
//     <Layout title="register-ecommerce App">
//     <div className="form-container">
//     <h1>Login page</h1>
//     <form onSubmit={handlseSubmit}>
//   <div className="mb-3 ">
//     <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='enter your email' required/>
//   </div>
//   <div className="mb-3">
//     <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"  placeholder='enter password' required/>
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>

//     </div>
    
//     </Layout>
//   )
// }

// export default Login




import React, { useState } from 'react';
import Layout from "./../../components/Layout/Layout.js";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useAuth } from "../../context/Auth.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", { email, password });

      // Log the response to inspect it
      console.log("Login response:", res.data);

      if (res && res.data.success) {
        toast.success(res.data.message);

        // Save user data and token to auth context and localStorage
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
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login. Please try again.");
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
