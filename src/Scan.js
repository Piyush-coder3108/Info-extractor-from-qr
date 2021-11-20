import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import extractEmails from './emailAddress'
import GetMobileNumber from './MobileNumber'
import getUrl from './url'
class Scan extends Component {
  state = {
    result: ''
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }

  render() {
    return (
      <div className="x">
      <div className=" row">
        <div className="col-6">
          <br>
          </br>
        {!this.state.result ? <h1 className="text-light">Extract Your Information</h1> :
         <div className="col-6" style={{textAlign:"start",fontWeight:"bold",fontSize:"25px"}}>
           
           <p> We got following Details :  {this.state.result}</p>
           <br></br>
           <br></br>
        
        
        <p>Url extracted is:  {getUrl(this.state.result)}</p>
        <p>Email extracted is: {extractEmails(this.state.result)}</p>
        <p>Phone Number extracted is: {GetMobileNumber(this.state.result)}</p>
      </div>}
         </div>
         <div className="col-6">
           <br>
           </br>
           <br>
           </br>
         <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '80%',height:'80%' }}
        
        />

         </div>
         
      </div>
      <br>
       </br>
      <a href="/" type="button" className="btn btn-dark text-white btn-lg p-2 my-2"> Back to Home</a>
      </div>
    
    )
  }
}
export default Scan;