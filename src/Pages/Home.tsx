




import {useState, useEffect} from 'react'
import Chat from '../Components/Chat'
import react from '../assets/logo/react.png'
import linux from '../assets/logo/linux-logo.png'
import rust from '../assets/logo/cuddlyferris.png'
import nodejs from '../assets/logo/nodejs.jpg'
import bash from '../assets/logo/bash.png'
import php from '../assets/logo/php.png'
import mern from '../assets/logo/mern.png'
import golang from '../assets/logo/golang.png'
import python from '../assets/logo/python.png'
import ts from '../assets/logo/ts.png'
import bs4 from '../assets/logo/bs4.png'
import selenium from '../assets/logo/selenium.png'
import git from '../assets/logo/git.png'

//npm i --save @fortawesome/fontawesome-svg-core
//npm install --save @fortawesome/free-solid-svg-icons
//npm install --save @fortawesome/react-fontawesome

const Home = () => {
	const [pos, setPos] = useState('top')
	const [yvalue, setYvalue] = useState(0)

	const waiter = (x: number) => {
		setYvalue(x)
	}

	const up = () => {
		window.scrollTo(0, 0)
	}
	
	const down = () => {
		window.scrollTo(0, document.body.scrollHeight)
	}

	useEffect(() => {
		if (pos == 'top') {
			up()
		} else {
			down()
		}
	}, [pos])

	window.addEventListener('scroll', () => {
		let height = document.body.scrollHeight
		let pos = window.scrollY
		let percentage = pos/height*100
		if (percentage > 24) {
			setPos('bot')
		} else {
			setPos('top')
		}
	})

// Slide in on scroll in
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('scroll-into-view')
			} else {
				entry.target.classList.remove('scroll-into-view')
			}
		})
	})
	const hiddenElements = document.querySelectorAll('.animate-in')
	hiddenElements.forEach((el) => observer.observe(el))

	return (
		<div className="flex flex-col justify-start items-center w-full ">
			<div id="section-intro"></div>
			<main className={`w-full backdrop-blur-sm h-fit`}>

				<section className={`mx-12 lg:mx-32 Montserrat flex flex-col md:flex-row justify-center md:justify-between items-center h-[90vh] `} >
					<img src="https://avatars.githubusercontent.com/u/90015510?s=400&u=c2d963e5188a2af39faf942c72ab89efbc52722a&v=4" className="rounded-full w-48 animate-in" alt="" />
					<div className="flex flex-col justify-around items-center md:items-end">
						<div className={`font-[700] text-2xl md:text-4xl text-[#f6f6f6] flex flex-col justify-around items-center md:items-end my-4 animate-in`}>
							WinterSunset95
						</div>
						<p className={`font-[300] text-sm text-[#f8f8f8] text-center md:text-end py-4 animate-in`}>Self taught, self motivated, highly determined programmer<br/>Dumb</p>
						<div className="flex flex-row justify-around items-center p-2 rounded-full md:backdrop-blur-lg md:bg-[rgba(50,50,50,0.5)] md:text-xs animate-in">
							<a href="https://github.com/WinterSunset95" target="_blank"><i className="text-[#f6f6f6] m-2 fa-3x fa-brands fa-github"></i></a>
							<a href="https://reddit.com/u/WallaceThiago95" target="_blank"><i className="text-[#f6f6f6] m-2 fa-3x fa-brands fa-reddit"></i></a>
							<a href="https://linkedin.com/in/MarkLFTlau" target="_blank"><i className="text-[#f6f6f6] m-2 fa-3x fa-brands fa-linkedin"></i></a>
							<a href="https://facebook.com/autumntowinter" target="_blank"><i className="text-[#f6f6f6] m-2 fa-3x fa-brands fa-facebook"></i></a>
						</div>
					</div>
				</section>

				<section className={`px-12 Montserrat flex flex-col justify-center items-center text-[#fff] h-screen `} id="section-tools">
					<div className={`my-40 md:my-28 p-0 lg:p-24 lg:pt-36 max-w-full max-h-full grid auto-rows-fr gap-8 grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12`}>
						<div className="rounded-full flex justify-center items-center row-span-3 col-span-3">
							<img src={react} className="rounded-full hover:animate-spin-slow" alt="" />
						</div>
						<div className="rounded-full flex justify-center items-center scale-200">
							<img src={rust} className="" alt="" />
						</div>
						<div className="rounded-full flex justify-center items-center row-span-3 col-span-3">
							<div className="rounded-full p-2 bg-[rgba(50,50,50,0.5)]">
								<img src={linux} className="" alt="" />
							</div>
						</div>
						<div className="rounded-full flex justify-center items-center scale-200">
								<img src={php} className="" alt="" />
						</div>
						<div className="rounded-full flex justify-center items-center row-span-2 col-span-2">
							<img src={nodejs} className="rounded-full" alt="" />
						</div>
						<div className="rounded-full flex justify-center items-center scale-150">
							<img src={python} className="rounded-full" alt="" />
						</div>
						<div className="rounded-full flex justify-center items-center row-span-2 col-span-2">
							<img src={selenium} className="rounded-full" alt="" />
						</div>
						<div className="rounded-full flex justify-center items-center scale-200">
							<img src={bash} className="rounded-full" alt="" />
						</div>
						<div className="rounded-full flex justify-center items-center row-span-2 col-span-2">
							<img src={bs4} className="rounded-full" alt="" />
						</div>
						<div className="rounded-full flex justify-center items-center scale-200">
							<img src={golang} className="rounded-full" alt="" />
						</div>
						<div className="rounded-full flex justify-center items-center row-span-2 col-span-2">
							<img src={ts} className="rounded-full" alt="" />
						</div>
						<div className="rounded-full flex justify-center items-center scale-200">
							<img src={mern} className="rounded-full" alt="" />
						</div>
						<div className="rounded-full flex justify-center items-center row-span-2 col-span-2">
							<img src={git} className="rounded-full" alt="" style={{ filter: 'invert(100%)' }}/>
						</div>
					</div>
				</section>

				<div className="sticky bottom-5 w-full flex justify-center items-center">
					<button onClick={() => down()} className={`${pos == 'top' ? '' : 'hidden'} h-12 w-12 rounded-full backdrop-blur-lg flex justify-center items-center animate-pulse`}>
						<i className="m-2 fa-xl fa-solid fa-arrow-down text-white"></i>
					</button>
					<button onClick={() => up()} className={`${pos == 'bot' ? '' : 'hidden'} h-12 w-12 rounded-full backdrop-blur-lg flex justify-center items-center animate-pulse`}>
						<i className="m-2 fa-xl fa-solid fa-arrow-up text-white"></i>
					</button>
				</div>


			</main>
		</div>
	)
}

export default Home;
