




import { useState, useEffect } from 'react'
import data from '../assets/data/products.json'

// tailwind drop shadow
// 

const Projects = () => {
	return (
		<div className="px-20 backdrop-blur-lg grid grid-cols-3 gap-12">
			{
				data.map(item => {
					return (
						<a href={item.link} target="_blank" key={item.name} className={`drop-shadow-md m-4 relative w-full h-full rounded-xl overflow-hidden`}>
							<div className={`w-full h-full absolute bottom-0 left-0 project-item`}>
								<div className="project-item-text p-4">
									<span className={`text-end MontAlt text-white text-2xl`}>{item.name}</span>
									<span className={`text-end MontAlt text-white`}>{item.description}</span>
								</div>
							</div>
							<img src={item.image} alt="" className={`w-full h-full`}/>
						</a>
					)
				})
			}
		</div>
	)
}

export default Projects
