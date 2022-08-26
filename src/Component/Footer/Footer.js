import React from 'react'
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    
    <Container fluid="true">
        <div style={{position: "fixed",
        left: "0",
        right:"0",
        margin:"0",
        padding:"0",
        bottom: "0",
        width: "100%"
        }} className="container my-5">
  
  <footer
          className="text-center text-lg-start text-dark"
          style={{backgroundColor:"#ECEFF1"}}
          
          >
    
    <section
             className="d-flex justify-content-between p-4 text-white"
             style={{backgroundColor:"#21D192"}}
             
             >
      
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      
      <div>
        <a href="facebook.com" className="text-white me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        
      </div>
     
    </section>
    
    <section className="">
      <div className="container text-center text-md-start mt-5">
        
        <div className="row mt-3">
          
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold">JUHALIFESTYLE</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                
                style={{backgroundColor:"#7c4dff", width:"60px",height:"2px"}}
                
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{backgroundColor:"#7c4dff", width:"60px",height:"2px"}}
                />
            <p>
              <a href="https://www.facebook.com/Juhalifestyle" className="text-dark">Mosharul Islam Juha</a>
            
            </p>
          </div>
          
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{backgroundColor:"#7c4dff", width:"60px",height:"2px"}}
                />
            <p>
              <a href="https://www.facebook.com/Juhalifestyle" className="text-dark">Your Account</a>
            </p>
            
          </div>
          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{backgroundColor:"#7c4dff", width:"60px",height:"2px"}}
                />
            <p><i className="fas fa-home mr-3"></i> Sylhet</p>
            <p><i className="fas fa-envelope mr-3"></i> mosharulislam@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> +88 01858098309</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
          
        </div>
       
      </div>
    </section>
    
    <div
         className="text-center p-3"
         style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}
         
         >
      © 2022 Copyright:
      <a className="text-dark" href="https://www.facebook.com/Juhaalifestyle"
         >Juhaalifestyle</a
        >
    </div>
    
  </footer>
  
    </div>
    </Container>
    

    
  )
}
