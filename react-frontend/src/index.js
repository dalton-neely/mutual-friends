import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import {Home} from './containers/Home'

import {Header} from './components/Header'
import {Footer} from './components/Footer'

class Routing extends React.Component {
	render(){
		return(
			<div className="no-padding container-fluid">
				<Header/>
				<Router>
					<div>
						<Route exact path='/' component={Home} />				
					</div>
				</Router>
				<Footer/>
			</div>
		)
	}
}

ReactDOM.render(<Routing />, document.getElementById('root'))
registerServiceWorker()
