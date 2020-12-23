import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav class="nav-extended">
			<div className="nav-wrapper">
				<Link to="/">
					<a href="#" className="brand-logo left hide-on-small-only">
						Melody's Math
					</a>
				</Link>
				{/* <a href="#" className="sidenav-trigger" data-target="mobile-menu">
					<i className="material-icons">menu</i>
				</a> */}
				<ul id="nav-mobile" className="right hide-on-small-only">
					<li>
						<Link to="/fractions">
							<a href="#">Fractions</a>
						</Link>
					</li>
					<li>
						<Link to="/decimals">
							<a href="#">Decimals</a>
						</Link>
					</li>
				</ul>
				<div class="nav-content hide-on-med-and-up">
					<ul class="tabs tabs-transparent">
						<Link to="/fractions">
							<li className="tab">
								<a href="#">Fractions</a>
							</li>
						</Link>
						<Link to="/decimals">
							<li className="tab">
								<a href="#">Decimals</a>
							</li>
						</Link>
					</ul>
				</div>
			</div>

			{/* <ul className="sidenav grey lighten-2" id="mobile-menu">
				<li>
					<Link to="/fractions">
						<a href="#">Fractions</a>
					</Link>
				</li>
				<li>
					<Link to="/decimals">
						<a href="#">Decimals</a>
					</Link>
				</li>
			</ul> */}
		</nav>
	);
};

export default NavBar;
