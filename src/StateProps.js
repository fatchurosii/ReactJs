import React, { Component } from 'react'
import Operan from './Operan';

export default class stateprops extends Component {
    constructor(props){
        super(props);
        this.state = {
            makanan : 'Bakso'
        }
    }

    gantiMakanan =(New_Makanan)=>{
        this.setState({
            makanan : New_Makanan
        })
    }
    render() {
        return (
            <div>
                <h2> {this.state.makanan}</h2>
                <button onClick={()=> this.gantiMakanan("Soto")}> Ganti Makanan</button>
                <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
            </div>
           

        )
    }
}
