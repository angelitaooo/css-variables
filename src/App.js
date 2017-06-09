import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {

  state = {
    min: 10,
    max:200,
    value: 10
  };

    // const inputs = document.querySelectorAll('.controls input');

    // function handleUpdate() {
    //   const suffix = this.dataset.sizing || '';
    //   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    // }

    handleUpdate(event) {
      this.setState ({
        spacing: event.target.value
      });
      
    }

    //pure javascript
    // inputs.forEach(input => input.addEventListener('change', handleUpdate));
    // inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

  render() {
    return (
      <div className="App">
        <h2>Update CSS Variables with <span className='hl'>React</span></h2>

        <div className="controls">
          <label for={this.state.spacing}>Spacing:</label>
          <input 
          id="spacing" 
          type="range" 
          name="spacing" 
          min="10" max="200" 
          value={this.state.spacing}
          data-sizing="px" 
          onClick={this.handleUpdate.bind(this)}
          readOnly
          />

          {/*<label for="blur">Blur:</label>
          <input 
            id="blur" 
            type="range" 
            name="blur" 
            min="0" max="25" 
            value="10" 
            data-sizing="px"
            onClick={this.handleUpdate.bind(this)}
            readOnly
          />

          <label for="base">Base Color</label>
          <input 
            id="base" 
            type="color" 
            name="base" 
            value="#ffc600" 
            onClick={this.handleUpdate.bind(this)}
            readOnly
          />*/}
        </div>

        <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
      </div>
    );
  }
}

export default App;
