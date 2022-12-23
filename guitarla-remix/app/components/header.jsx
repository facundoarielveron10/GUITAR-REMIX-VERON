import { Link } from '@remix-run/react';
import logo from '-/img/logo.svg';
import Navegacion from './navegacion';

const Header = () => {
	return (
		<header className="header">
			<div className="contenedor barra">
				<Link className="logo" to="/">
					<img className="logo" src={logo} alt="GuitarLA Logo" />
				</Link>

				<Navegacion />
			</div>
		</header>
	);
};

export default Header;
