import React, {Component} from 'react'

class Form extends Component{
    constructor(){
        super();
        this.state={
            make: '',
            model: '',
            year: 0,
            color: '',
            price: 0,
        }
        this.addNewCar= this.addNewCar.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    addNewCar(){
        console.log(this.state)
        const{make, model, year, color, price} = this.state
        let newCar={make, model, year, color, price}
        this.props.addVehicle(newCar)
    }
    render(){
        return(
            <div>
                <input name='make' onChange={(e)=>this.handleChange(e)} placeholder='make'/>
                <input name='model' onChange={(e)=>this.handleChange(e)} placeholder='model'/>
                <input name='year' onChange={(e)=>this.handleChange(e)} placeholder='year' type='number'/>
                <input name='color' onChange={(e)=>this.handleChange(e)} placeholder='color'/>
                <input name='price' onChange={(e)=>this.handleChange(e)} placeholder='price' type='number'/>
                <button onClick={this.addNewCar}>Add Vehicle</button>
            </div>
        )
    }
}


export default Form