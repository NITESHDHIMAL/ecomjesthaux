import React from 'react'
import Header from './Header'
import Footer from './Footer'
 

const Layout = (props) => {
  return (
    <> 
     <Header/>

     {props.child}

     <Footer/>
     
    </>
  )
}

export default Layout