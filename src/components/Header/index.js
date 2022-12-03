import { Link, NavLink } from 'react-router-dom';

import './style.css';

const Header = () => {
	const activeClass = (params) => {
		return params.isActive ? "active-item" : ""
	}

	return (
		<ul className='header'>
			<li>
				<NavLink to="/" className={activeClass}>Home</NavLink>
			</li>
			<li>
				<NavLink to="/welcome" className={activeClass}>Welcome</NavLink>
			</li>
			<li>
				<NavLink to="/products" className={activeClass}>Products</NavLink>
			</li>
		</ul>
	)
}

export default Header;