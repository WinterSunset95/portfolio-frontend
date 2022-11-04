




import {useState, useEffect} from 'react'
import Nav from '../Components/Nav'
import horror from '../assets/backgrounds/horror.jpg'

const Home = () => {
	return (
		<div className="flex flex-col justify-start items-center w-full relative h-screen">
			<img src={horror} className="absolute w-full top-0 -z-10" alt="Horror bg"/>
			<Nav />
			This is the home page
		</div>
	)
}

export default Home;
