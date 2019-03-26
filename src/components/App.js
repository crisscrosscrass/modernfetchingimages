import React, {Component} from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import ModernFetchingImages from './ModernFetchingImages'


class App extends Component{
	constructor(){
		super()
		this.handleClick = this.handleClick.bind(this)
		this.NavMenuClicked = this.NavMenuClicked.bind(this)
		this.ModernImage = React.createRef();
	}
	handleClick(){
		console.log('was clicked')
	}
	NavMenuClicked(name){
		console.log(""+ name +" was clicked")
		this.updateAlisa();
	}
	updateAlisa = () => {
		this.ModernImage.current.updateImageAlisa();
    };

	render(){
		return(
			<div>
				<Navbar handleClick={this.handleClick}>
					<ul>
						<li><button onClick={(event) => this.ModernImage.current.updateImageForrest()}>Forrest</button></li>
						<li><button onClick={() => this.ModernImage.current.updateImageAlisa() }>Alisa Amore</button></li>
						<li><button onClick={() => this.ModernImage.current.updateImageJordan() }>Jordan Carver</button></li>
						<li><button onClick={() => this.ModernImage.current.updateImageAlice() }>Alice Goodwin</button></li>
						<li><button >Kate Upton</button></li>
						<li><button >Holly Peers</button></li>
						<li><button >Alyssa Arce</button></li>
					</ul>
				</Navbar>
				<ModernFetchingImages ref={this.ModernImage} />
				<Footer />
			</div>
			)
	}
}

export default App