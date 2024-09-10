import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import notFound from "../../assets/img/notFound.jpeg"
import "./NotFound.css"

const NotFound = () => {
    const navigateee =useNavigate()

  return (
    <Container className="text-center notFound">
      <img src={notFound} alt="" width="550px" />

     
        <button onClick={()=>navigateee("/")} className="btn btn-info">GO HOME</button>
    
    </Container>
  )
}

export default NotFound