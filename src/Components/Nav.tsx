



import {useState, useEffect } from 'react'

const Nav = () => {
	return (
		<nav className="w-full Montserrat text-md flex justify-between items-center p-2 md:p-4">
			WinterSunset95
			<ul className="flex justify-around items-center text-sm">
				<li className="mr-2">Home</li>
				<li className="mr-2">About</li>
				<li className="mr-2">Projects</li>
				<li className="mr-2">TIL</li>
				<li className="mr-2">Contact</li>
			</ul>
		</nav>
	)
}

export default Nav;
