import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {

  state = {
    spacing: 0,
    blur: 10,
    color: "#ffc600" 
  };    

    handleSpacing(event) {
      this.setState ({
        spacing: event.target.value
      });     
    }
    handleBlur(event) {
      this.setState ({
        blur: event.target.value
      });
      document.documentElement.style.setProperty(`--blur`, this.state.blur + 'px');
    }
    handleColor(event) {
      this.setState ({
        color: event.target.value
      });     
    }

    //pure javascript
    // inputs.forEach(input => input.addEventListener('change', handleUpdate));
    // inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

  render() {
    const styles = {
      padding: this.state.spacing,
      backgroundColor: this.state.color 
    }
    return (
      <div className="App">
        <h2>Styling an image with <span className='hl'>React</span></h2>

        <div className="controls">
          <label for={this.state.spacing}>Spacing:</label>
          <input 
          id="spacing" 
          type="range" 
          name="spacing" 
          min="10" max="200" 
          value={this.state.spacing}
          data-sizing="px" 
          onChange={this.handleSpacing.bind(this)}
          readOnly
          />

          <label for="blur">Blur:</label>
          <input 
            id="blur" 
            type="range" 
            name="blur" 
            min="0" max="25" 
            value={this.state.blur} 
            data-sizing="px"
            onChange={this.handleBlur.bind(this)}
            readOnly
          />

          <label for="base">Base Color</label>
          <input 
            id="base" 
            type="color" 
            name="base" 
            value={this.state.color} 
            onChange={this.handleColor.bind(this)}
            readOnly
          />
        </div>

        <img  style={styles} src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
      </div>
    );
  }
}

export default App;
