




import { useState, useEffect } from 'react'
import data from '../assets/data/products.json'

// tailwind drop shadow
// 

const Projects = () => {
	return (
		<div className="px-20 backdrop-blur-sm flex wrap">
			{
				data.map(item => {
					return (
						<div key={item.name} className={`drop-shadow-md m-4 relative w-fit h-fit`}>
							<div className={`w-full h-full absolute bottom-0 left-0 flex flex-col justify-end items-end bg-gradient-to-br from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,1)] p-4`}>
								<span className={`text-end MontAlt text-white`}>{item.name}</span>
								<span className={`text-end MontAlt text-white`}>{item.description}</span>
							</div>
							<img src={item.image} alt="" className={``}/>
						</div>
					)
				})
			}
		</div>
	)
}

export default Projects
