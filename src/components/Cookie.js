import React, { Component } from 'react';


class Cookie extends Component {
  constructor(props){
	  super(props);
	   
	   this.state= { count: 0 }
 	   this.updateClicks = this.updateClicks.bind(this)
 }
	
 updateClicks = () => { 
	 this.setState({ 
         count : this.state.count + 1
    });
 }

render() {
	return(
	    <div>
		<img onClick = {this.updateClicks} src='/images/cookie.png' className="BigCookie" alt="cookie" />
		<p>Counter : {this.state.count}</p>
		</div>
	   )
     }  
  }
export default Cookie;