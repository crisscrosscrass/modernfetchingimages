import React,{Component} from 'react'
import './navbar.css'

/* this function can be used:
	<button onClick={this.props.handleClick}>Click me to Parent</button>
	for calling method on parent
*/

class Navbar extends Component{
	render(){
		return(
			<header className="headerNavi">
				{this.props.children }
			</header>
		)
	}
}

export default Navbar