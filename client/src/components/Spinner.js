// import React,{useState,useEffect} from 'react'
// import { useNavigate,useLocation } from 'react-router-dom'


// const Spinner = () => {
//     const [count,setCount]=useState(5)
//     const navigate=useNavigate()
//     const location=useLocation()
//     useEffect(()=>{
//         const interval=setInterval(()=>{
//             setCount((preValue)=>--preValue)
//         },1000)
//         count ===0 && navigate("/login",{
//             state:location.pathname
//         })
//         return ()=>clearInterval(interval)
        
//     },[count,navigate,location])
//   return (
//     <>
    
//     <div className="d-flex justify-content-center">
//         <h1 className='Text-center'>Redirecting to You in {count} second</h1>
//   <div className="spinner-border" role="status">
//     <span className="visually-hidden">Loading...</span>
//   </div>
// </div>

    
//     </>
//   )
// }

// export default Spinner


import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Spinner = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount <= 1) {
                    clearInterval(interval);
                    navigate('/login', {
                        state: location.pathname,
                    });
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1000);

        // Cleanup interval when the component unmounts
        return () => clearInterval(interval);
    }, [navigate, location]);

    return (
        <div className="d-flex justify-content-center">
            <div>
                <h1 className="text-center">
                    Redirecting you in {count} second{count !== 1 ? 's' : ''}...
                </h1>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
