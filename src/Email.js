import React, { Component, useState } from "react";
import QrReader from 'react-qr-reader'
import Se from "./S-Email";
import Sm from "./S-Mobile";
import './App.css'
class Email extends Component {
  state = {
    result: '',
    value: ''
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


  handleChangeE = event => {
    console.log(event.target.value)
    this.setValue({ value: event.target.value })

  }
  handleChangeM = event => {
    console.log(event.target.value)
    this.setValue({ value: event.target.value })

  }
  render() {
    return (
      <div className="x">
        <div className=" row  text-white ">
          <div className="col-6">

            <h1 className="text-bold">Form Fill up using QR</h1>
            <br></br>
            <br>
            </br>
            <br>
            </br>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1"><h3>Email address</h3></label>
                <input type="email" class="form-control inputbox" id="exampleInputEmail1" aria-describedby="emailHelp" value={Se(this.state.result)} onChange={this.handleChangeE} />
               
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1"><h3>Phone Number</h3></label>
                <input type="email" class="form-control inputbox" value={Sm(this.state.result)} onChange={this.handleChangeM} />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1"><h3>Password</h3></label>
                <input type="password" class="form-control inputbox" id="exampleInputPassword1" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
            <br>
            </br>
            <a href="/" type="button" className="btn btn-dark text-white btn-lg p-2 my-2"> Back to Home</a>

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
              style={{ width: '80%', height: '80%' }}
            />
          </div>
        </div>

      </div>
    );
  };
}

export default Email;