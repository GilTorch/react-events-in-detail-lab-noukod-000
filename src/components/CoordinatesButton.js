// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{
    constructor(props){
        super(props)
    }

    setMouseCoordinates=(event)=>{
        let coordinatesX=event.clientX;
        let coordinatesY=event.clientY;
        let coordinates=[coordinatesX,coordinatesY]
        this.props.onReceiveCoordinates(coordinates);
    }

    
    render(){
        return(<button onClick={this.setMouseCoordinates}></button>)
    }
}

export default CoordinatesButton;