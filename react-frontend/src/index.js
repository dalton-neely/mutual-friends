import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import {Home} from './containers/Home';

class Routing extends React.Component {
	render(){
		return(
			<Router>
				<div>
					<Route exact path='/' component={Home} />				
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
