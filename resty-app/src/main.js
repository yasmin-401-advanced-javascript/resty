'use strict';
import React from 'react';
import './main.scss';

class Counter  extends React.Component {
    constructor(props) {
      super(props);
      this.state = { url: 'url' , method:'GET' };
    }
    handleChange = (e) => {
      const url = e.target.value;
      this.setState({ url });
      console.log(url);
    };
      handleChangeMethod = (e) => {
        const method = e.target.value;
        this.setState({ method });
        console.log(method);
    };
    render() {
      return (
  <main  className="main">
    <form>
      <legend>
        <label>
          URL :
        </label>
        <input  type="text" placeholder="type here" onClick={this.handleChange,this.handleChangeMethod}>
        </input>
      <button>GO!</button>
      </legend>
      <div class="btnHolder">
      <button type="button" onClick={this.handleChangeMethod} className="btn">GET!</button>
      <button type="button" onClick={this.handleChangeMethod} className="btn">POST!</button>
      <button type="button" onClick={this.handleChangeMethod} className="btn"> UPDATE!</button>
      <button type="button" onClick={this.handleChangeMethod} className="btn">DELETE!</button>
      </div>
    </form>
    <div className="pragraph">
      <p>
      {this.state.url}  {this.state.method}
      </p>
    </div>
  </main>
  );
  };
  }

  
  export default Counter;