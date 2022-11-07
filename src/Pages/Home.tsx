




import {useState, useEffect} from 'react'
import Nav from '../Components/Nav'

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

//	window.addEventListener('scroll', () => {
//		if (window.scrollY > yvalue && window.scrollY - yvalue > 200) {
//			down()
//		} else if (window.scrollY < yvalue && yvalue - window.scrollY > 200) {
//			up()
//		} else {
//			let o: number
//		}
//		setTimeout(() => setYvalue(window.scrollY), 1000)
//	})

	return (
		<div className="flex flex-col justify-start items-center w-full relative">
			<div id="section-intro"></div>
			<Nav />
			<main className={`w-full backdrop-blur-sm h-fit`}>

				<section className={`mx-12 lg:mx-32 Montserrat flex flex-col md:flex-row justify-center md:justify-between items-center h-[90vh] relative`} >
					<img src="https://avatars.githubusercontent.com/u/90015510?s=400&u=c2d963e5188a2af39faf942c72ab89efbc52722a&v=4" className="rounded-full w-48" alt="" />
					<div className="flex flex-col justify-around items-center md:items-end">
						<span className={`font-[700] text-2xl md:text-4xl text-[#f6f6f6] flex flex-row justify-between items-center`}>
							WinterSunset95
						</span>
						<p className={`font-[300] text-sm text-[#f8f8f8] text-center md:text-end py-4`}>Self taught, self motivated, highly determined programmer<br/>Dumb</p>
						<div className="flex flex-row justify-around items-center p-2 rounded-full md:backdrop-blur-lg md:bg-[rgba(50,50,50,0.5)] md:text-xs">
							<i className="text-[#f6f6f6] m-2 fa-3x fa-brands fa-github"></i>
							<i className="text-[#f6f6f6] m-2 fa-3x fa-brands fa-reddit"></i>
							<i className="text-[#f6f6f6] m-2 fa-3x fa-brands fa-linkedin"></i>
							<i className="text-[#f6f6f6] m-2 fa-3x fa-brands fa-facebook"></i>
						</div>
					</div>
				</section>

				<section className={`px-12 Montserrat flex flex-col justify-center items-center text-[#fff] h-screen relative`} id="section-tools">
					<div></div>
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
