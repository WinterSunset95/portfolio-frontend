




import {useState, useEffect} from 'react'
import Nav from '../Components/Nav'
import horror from '../assets/backgrounds/horror.jpg'
import street_aesthetic from '../assets/backgrounds/street_aesthetic.jpg'

const Home = () => {
	const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
	return (
		<div className="flex flex-col justify-start items-center w-full relative">
			<img src={street_aesthetic} className="absolute w-full top-0 -z-10" alt="Horror bg"/>
			<Nav />
			<main className={`w-full `}>
				{
					arr.map(item => <p>Lorem dolores vitae elit nulla maiores Praesentium sit eos quasi aspernatur nobis corporis Maxime atque aut illum amet alias cum. Accusamus ipsum ut quidem unde itaque Cum eligendi eos ipsum.</p>)
				}
			</main>
		</div>
	)
}

export default Home;
