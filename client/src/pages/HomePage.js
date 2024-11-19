
import React from 'react'
import Layout from './../components/Layout/Layout';
import {useAuth} from "./../context/Auth"

const HomePage = () => {
  const[auth,setAuth]=useAuth()
  return (
    <Layout title={'best offers'}>
        <h1>HOME PAGE
        </h1>
        <pre>{JSON.stringify(auth,null,4)}</pre>
        

    </Layout>
  )
}

export default HomePage

// import React, { useEffect, useState } from "react";
// import Layout from "./../components/Layout/Layout";
// import { useAuth } from "./../context/Auth";

// const HomePage = () => {
//   const [auth, setAuth] = useAuth();
//   const [storedData, setStoredData] = useState(null);

//   useEffect(() => {
//     try {
//       const data = JSON.parse(localStorage.getItem("auth"));
//       setStoredData(data);
//     } catch (error) {
//       console.error("Error parsing stored auth data:", error);
//     }
//   }, []);

//   return (
//     <Layout title={"Best Offers"}>
//       <h1>HOME PAGE</h1>
//       {storedData?.user ? (
//         <div>
//           <h2>Welcome, {storedData.user.name}!</h2>
//           <p>Email: {storedData.user.email}</p>
//         </div>
//       ) : (
//         <p>Please log in to access more features.</p>
//       )}
//       {/* Uncomment for debugging */}
//       {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
//       {/* <pre>{JSON.stringify(storedData, null, 4)}</pre> */}
//     </Layout>
//   );
// };

// export default HomePage;
