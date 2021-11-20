import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const Home = () => {
    return(
        <div className="z">
            <div className=" jumbotron text-center my-0">
               <h1> INFO EXTRACTOR </h1>
            </div>
            
            <div className="row">

                <div className="col-md-6">
                     <div className="random">
                     <div className="row factor">
                        
                         <h3 className="option">Choose your Options: </h3>
                     </div>
                  
                   
                    <Link to="/generate">
                    <button type="button"  className="btn btn-primary btn-block common">
                       QR-code Generator
                        </button>
                        </Link>
                
                
                    
                    <Link to ="/scan">
                    <button type="button" className="btn  btn-primary btn-block common ">
                      QR-code Scanner
                    </button>
                    </Link>
                   
                    
                    <Link to ="/signup">
                    <button type="button" className="btn  btn-primary btn-block common">
                        Qr-code Form Filling
                    </button>
                    </Link>
                
                     </div>


                </div>

                 <div className="col-md-6">
                        <div className="body">
                            </div>
                </div>
            </div>
        </div>
    
)
    }

export default Home
