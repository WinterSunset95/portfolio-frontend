




import {useState, useEffect} from 'react'
import Nav from '../Components/Nav'
import horror from '../assets/backgrounds/horror.jpg'

const Home = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full relative">
			<div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
				<img src={horror} className="object-none" alt="Horror bg"/>
			</div>
			<Nav />
			This is the home page
		</div>
	)
}

export default Home;
