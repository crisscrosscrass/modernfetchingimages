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
	notImplementedYet(){
			alert("This feature is not live yet!")
		}

	render(){
		/* const styleNSFW = {
			width: '100%',
			color: 'red',
			textAlign: 'center',
			verticalAlign: 'top',
			fontSize: 8,
			marginTop: 0,
			marginBottom: 50,
			paddingBottom: 50
		}
		*/
		const styleSpecial = {
			width: '100%',
			color: 'yellow',
			textAlign: 'center',
			verticalAlign: 'top',
			fontSize: 8,
			marginTop: 0,
			marginBottom: 50,
			paddingBottom: 50
		}
		return(
			<div>
				<Navbar handleClick={this.handleClick}>
					<ul>
						<li><button onClick={(event) => this.ModernImage.current.updateImageForrest()}>Forrest</button></li>
						{/*
						<li><button onClick={() => this.ModernImage.current.updateImageAlisa() }>Alisa Amore <span style={styleNSFW}>NSFW</span></button></li>
						<li><button onClick={() => this.ModernImage.current.updateImageAlice() }>Alice Goodwin <span style={styleNSFW}>NSFW</span></button></li>
						*/}
						<li><button onClick={() => this.ModernImage.current.updateImageJordan() }>Jordan Carver</button></li>
						<li><button onClick={() => this.ModernImage.current.updateImageMatoro() }>Matoro <span style={styleSpecial}>ARTS</span></button></li>
						<select>
							<option>JSON</option>
							<option>Google Sheet</option>
							</select>
						<input type="text" placeholder="Enter feed image url"/><button className="submitButton" onClick={this.notImplementedYet}>Submit</button>
					</ul>
				</Navbar>
				<ModernFetchingImages ref={this.ModernImage} />
				<Footer />
			</div>
			)
	}
}

export default App