import React,{useState,createContext,useEffect} from 'react'
export const UserContext=createContext()

function UserContextProvider(props) {

const [user,setUser]=useState('');
const [token,setToken]=useState('');

useEffect(() => {
    setToken(localStorage.getItem('token'))
    setUser(JSON.parse(localStorage.getItem('userInfo')))
}, [])



  return (
    <div>
        <UserContext.Provider value={{user,setUser,token,setToken}}>
            {props.children}

        </UserContext.Provider>
    </div>
  )
}

export default UserContextProvider