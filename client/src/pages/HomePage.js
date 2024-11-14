
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