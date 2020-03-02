import React, {Component} from 'react';
import Login from './Components/Login'
import Form from './Components/Form'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      vehicles:[]
    }
    this.addVehicle=this.addVehicle.bind(this)
  }

  componentDidMount(){
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(response=>{
      console.log('response', response)
      this.setState({
        vehicles: response.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  addVehicle=(newCar)=>{
    axios.post(`https://joes-autos.herokuapp.com/api/vehicles`, newCar)
    .then(response=>{this.setState({
      vehicles: response.data
    })
  })
    .catch(err=> console.log(err));
  }

  render(){
    console.log(this.state.vehicles)
    return (
      <div className="App">
        <div className="header-container">
          <section className="login">
            <p>Hello World</p>
          </section>
          <section className="about-info">
            <p>Contact Us</p>
            <p>About</p>
            <p>Home</p>
          </section>
        </div>
        <div className="body-container">
          {/* <Login/> */}
          <Form addVehicle={this.addVehicle}/>
          {this.state.addNewCar}

        </div>
        <div></div>
        <div></div>
      </div>
  );
}
}

export default App;
