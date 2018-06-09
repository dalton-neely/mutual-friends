import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div>
				<nav id="mf-nav-bar" className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="/"><img id="mf-logo" src="/img/mutual-friends-logo.png" alt="Mutual Friends Logo"/></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
						<a className="nav-item nav-link" href="/">Home</a>
						<a className="nav-item nav-link" href="/about">About</a>
						<a className="nav-item nav-link" href="/contact">Contact</a>
						<a className="nav-item nav-link" href="/products">Products</a>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}

export {Header}
