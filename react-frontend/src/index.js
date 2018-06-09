import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import AddItem from './components/AddItem';
class Routing extends React.Component {
	render(){
		return(
			<Router>
				<div>
					<Route exact path='/' component={App} />
					<Route path='/add-item' component={AddItem} />				
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
