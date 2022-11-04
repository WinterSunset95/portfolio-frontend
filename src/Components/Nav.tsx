



import {useState, useEffect } from 'react'

const Nav = () => {
	window.addEventListener('scroll', () => console.log(window.scrollY))
	return (
		<nav className="w-screen Montserrat text-md flex justify-between items-center p-2 md:p-4 text-[#f6f6f6] font-[300] bg-[rgba(20,20,20,0.3)] sticky top-0">
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
