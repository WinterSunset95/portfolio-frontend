



import {useState, useEffect } from 'react'

const Nav = () => {
	const [top, setTop] = useState(true)
	const [full, setFull] = useState(false)
	window.addEventListener('scroll', () => window.scrollY > 40 ? setTop(false) : setTop(true))
	useEffect(() => {
		console.log(top)
	}, [top])
	return (
		<nav className={`${top ? 'w-screen md:w-9/12' : 'w-screen sticky top-0 bg-[rgba(20,20,20,0.3)]'} duration-300 Montserrat text-md flex justify-between items-center p-2 md:p-4 text-gray-100 font-[300] text-base md:text-xl`}>
			WinterSunset95
			<ul className={`${full ? 'w-0' : 'w-auto'} duration-500 flex justify-around items-center text-sm md:text-lg overflow-hidden md:w-auto `}>
				<li className={`mr-2 md:mr-4 cursor-pointer hover:font-[500]`}>Home</li>
				<li className={`mr-2 md:mr-4 cursor-pointer hover:font-[500]`}>About</li>
				<li className={`mr-2 md:mr-4 cursor-pointer hover:font-[500]`}>Projects</li>
				<li className={`mr-2 md:mr-4 cursor-pointer hover:font-[500]`}>TIL</li>
				<li className={`mr-2 md:mr-4 cursor-pointer hover:font-[500]`}>Contact</li>
			</ul>
			<button className="w-4 h-4 md:hidden" onClick={() => setFull(!full)}>
				<svg className="w-full h-full" fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
			</button>
		</nav>
	)
}

export default Nav;
