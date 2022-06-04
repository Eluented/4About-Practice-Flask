import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import httpClient from '../httpClient'


export const LandingPage = () => {
  const navigate = useNavigate();


  const [user, setUser] = useState({
    id: null,
    username: null
  })
  

  useEffect(() => {

    const checkLoggedIn = async () => {



      try {
        const resp = await httpClient.get("https://uabout.herokuapp.com/@me");

        setUser(resp.data)
      } catch(e) {
        console.log(e)
      }
    }

    checkLoggedIn()

  }, [])
  
  return (
    <>
    <h1>This is the landing page smiley face</h1>
    {user.username != null ?
              <h1>Hello {user} </h1>: <h1>Hey! Let's get started</h1>
    }

    <button onClick={() => navigate("/login")}>Login</button>



    <button onClick={() => navigate("/register")}>Register</button>
    </>
  )
}
