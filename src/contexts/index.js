import React from 'react'
import ThemeContextProvider from './ThemeContext'
import UserContextProvider from './UserContext'

function ContextReducer(props) {
  return (
    <ThemeContextProvider>
        <UserContextProvider>
            {props.children}
        </UserContextProvider>
    </ThemeContextProvider>
  )
}

export default ContextReducer