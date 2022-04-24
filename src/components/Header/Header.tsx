import React from 'react'
import './Header.scss'

const Header: React.FC = () => {
	return (
		<div className="header__wrap">
			<header className="header">
				<div className="header__title">
					<span>IActive</span>
				</div>
			</header>
		</div>
	)
}

export default Header