



import {useState, useEffect } from 'react'

const Nav = () => {
	const [top, setTop] = useState(true)
	const [full, setFull] = useState(false)
	window.addEventListener('scroll', () => window.scrollY > 40 ? setTop(false) : setTop(true))
	return (
		<nav className={`${top ? 'p-2 md:px-32' : 'p-2 md:p-4 sticky top-0 bg-[rgba(20,20,20,0.5)]'} w-full duration-300 Montserrat text-md flex justify-between items-center text-gray-100 font-[300] text-base md:text-xl z-10 backdrop-blur-xl`}>
			<span className={`${full ? 'w-0 overflow-hidden' : 'w-full'} duration-500`}>
				WinterSunset95
			</span>
			<div className={`w-full h-full flex flex-row justify-end ml-4`}>
				<ul className={`${full ? 'w-full' : 'w-0'} md:w-full duration-300 overflow-hidden flex justify-between md:justify-end items-center text-sm md:text-lg`}>
					<li className={`mr-2 md:mr-6 cursor-pointer hover:font-[500]`}>Home</li>
					<li className={`mr-2 md:mr-6 cursor-pointer hover:font-[500]`}>About</li>
					<a href="/projects" className={`mr-2 md:mr-6 cursor-pointer hover:font-[500]`}>
						<li className={``}>Projects</li>
					</a>
					<a href="/til" className={`mr-2 md:mr-6 cursor-pointer hover:font-[500]`}>
						<li className={``}>TIL</li>
					</a>
					<li className={`mr-2 md:mr-6 cursor-pointer hover:font-[500]`}>Contact</li>
				</ul>
			</div>
			<button className={`${full ? 'hidden' : ''} w-8 h-8 md:hidden`} onClick={() => setFull(!full)}>
				<svg className="w-full h-full" fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
			</button>
			<button className={`${full ? '' : 'hidden'} w-4 h-3 md:hidden ml-4`} onClick={() => setFull(!full)}>
				<svg className="w-full h-full" fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
			</button>
		</nav>
	)
}

export default Nav;
