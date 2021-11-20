import React,{useState} from 'react';
import './App.css'
var QRCode = require('qrcode.react');

const Generate = ()=>{
  const [value,setValue]=useState('');
  
  const handleChange = event=>{
    event.preventDefault();
    setValue(event.target.value)
  }

  const downloadQR = () => {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return(
    
    <div className="x">
       
  <div className="jumbotron text-white">
  <h1 className="text-bold">ENTER YOUR DETAILS</h1>
  <br>
  </br>
  <br> 
  </br>
    <div>
      <div className="row">
        <div className="col-md-6">
        <form>
        <label className="text-white text-center p-4">
          <h3>Enter Here: </h3>
          <textarea className="form-control" style={{padding:"50px"}}  type="text" value={value} onChange={handleChange} />
        </label>
      </form>
        </div>
      <div className="col-md-6">
      <QRCode
        id="123456"
        value={value}
        size={290}
        level={"H"}
        includeMargin={true}
      />


        </div>

      </div>

    </div>
       
        <div className="form-group">
      
     
      <br></br>
      <a onClick={downloadQR}type="button" className="btn btn-dark text-white btn-lg p-2 my-2"> Download your QR code </a>
       <br>
       </br>
      <a href="/" type="button" className="btn btn-dark text-white btn-lg p-2 my-2"> Back to Home</a>
    </div> 
    </div>
    </div>
  )
}
export default Generate;