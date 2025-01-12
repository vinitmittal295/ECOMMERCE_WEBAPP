
// import React, { useState } from 'react';
// import Layout from "./../../components/Layout/Layout.js";
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";

// const ForgotPassword = () => {

//     const [email, setEmail] = useState("");
//   const [newPassword, setnewPassword] = useState("");
//   const [answer, setAnswer] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8080/api/v1/auth/forgot-password", { email, newPassword,answer });
      
 
//       // Log the response to inspect it
//       console.log("Login response from api:", res.data);

//       if (res && res.data.success) {
//         toast.success(res.data.message);

//         // Navigate to the homepage or dashboard
//         navigate( "/login");
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.error("Login error from catch:", error);
//       toast.error("An error showing from toast occurred during login . Please try again.");
//     }
//   };
//   return (
//     <Layout>
//         <div className="form-container">
//         <h1>Reset password</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <input 
//               type="email" 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               className="form-control" 
//               id="exampleInputEmail1" 
//               placeholder="Enter your email" 
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input 
//               type="text" 
//               value={answer} 
//               onChange={(e) => setAnswer(e.target.value)} 
//               className="form-control" 
//               id="exampleInputEmail1" 
//               placeholder="Enter your favorate sport" 
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input 
//               type="password" 
//               value={newPassword} 
//               onChange={(e) => setnewPassword(e.target.value)} 
//               className="form-control" 
//               id="exampleInputPassword1" 
//               placeholder="Enter password" 
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">Reset</button>
//         </form>
//       </div>
        
//         </Layout>
//   )
// }

// export default ForgotPassword


import React, { useState } from "react";
import Layout from "../../components/Layout/Layout.js"; // Fixed import syntax spacing
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState(""); // Updated to camelCase for consistency
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/forgot-password",
        { email, newPassword, answer }
      );

      console.log("API response:", res.data); // Use meaningful log messages

      if (res && res.data.success) {
        toast.success(res.data.message || "Password reset successfully!"); // Handle cases where `message` may not exist
        navigate("/login");
      } else {
        toast.error(res.data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error during password reset:", error); // Better error logging
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Security Question Input */}
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              placeholder="Enter your favorite sport"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              placeholder="Enter new password"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
