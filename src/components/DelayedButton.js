// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{
    constructor(props){
        super(props)
    }

    setDelay=(event)=>{
        event.persist()
        const that=this;
        setTimeout(function(){
            that.props.onDelayedClick(event);
        },this.props.delay)
    }
    
    render(){
        return(<button onClick={this.setDelay}></button>)
    }
}

export default DelayedButton;