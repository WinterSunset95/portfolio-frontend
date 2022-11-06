




import {useState, useEffect} from 'react'
import Nav from '../Components/Nav'
import horror from '../assets/backgrounds/horror.jpg'
import street_aesthetic from '../assets/backgrounds/street_aesthetic.jpg'
import programming from '../assets/backgrounds/programming.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

//npm i --save @fortawesome/fontawesome-svg-core
//npm install --save @fortawesome/free-solid-svg-icons
//npm install --save @fortawesome/react-fontawesome

const Home = () => {
	const [pos, setPos] = useState('top')
	const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
	return (
		<div className="flex flex-col justify-start items-center w-full relative">
			<div id="section-intro"></div>
			<Nav />
			<main className={`w-full backdrop-blur-sm h-fit`}>
				<section className={`mx-12 Montserrat flex flex-row justify-between items-center h-[90vh] relative`} >
					<img src="https://avatars.githubusercontent.com/u/90015510?s=400&u=c2d963e5188a2af39faf942c72ab89efbc52722a&v=4" className="rounded-full hidden md:block w-48" alt="" />
					<div className="flex flex-col justify-around items-end">
						<span className={`font-[700] text-2xl md:text-4xl text-[#f6f6f6] flex flex-row justify-between items-center`}>
							WinterSunset95
							<img src="https://avatars.githubusercontent.com/u/90015510?s=400&u=c2d963e5188a2af39faf942c72ab89efbc52722a&v=4" className="ml-2 rounded-full md:hidden w-8" alt="" />
						</span>
						<p className={`font-[300] text-sm text-[#f8f8f8] text-end py-4`}>I am a self taught, self motivated, highly determined programmer<br/> I am dumb</p>
						<div className="flex flex-row justify-around items-center p-2 rounded-full backdrop-blur-lg bg-[#f6f6f6]">
							<i className="m-2 fa-lg md:fa-2xl fa-brands fa-github"></i>
							<i className="m-2 fa-lg md:fa-2xl fa-brands fa-reddit"></i>
							<i className="m-2 fa-lg md:fa-2xl fa-brands fa-facebook"></i>
							<i className="m-2 fa-lg md:fa-2xl fa-brands fa-linkedin"></i>
						</div>
						<a onClick={() => setPos('bot')} className={`${pos == 'top' ? '' : 'hidden'} absolute bottom-5 left-1/2 transform -translate-x-1/2 h-12 w-12 rounded-full backdrop-blur-lg flex justify-center items-center animate-pulse`} href="#section-tools">
							<i className="m-2 fa-xl fa-solid fa-arrow-down text-white"></i>
						</a>
					</div>
				</section>
				<section className={`px-12 Montserrat flex flex-col justify-center items-start text-[#fff] h-screen relative`} id="section-tools">
					<a onClick={() => setPos('top')} className={`${pos == 'bot' ? '' : 'hidden'} absolute top-12 left-1/2 transform -translate-x-1/2 h-12 w-12 rounded-full backdrop-blur-lg flex justify-center items-center animate-pulse`} href="#section-intro">
						<i className="m-2 fa-xl fa-solid fa-arrow-up text-white"></i>
					</a>
				</section>
			</main>
		</div>
	)
}

export default Home;
