




import { useState, useEffect } from 'react'
import data from '../assets/data/products.json'

const Projects = () => {
	return (
		<div className="mx-20 backdrop-blur-sm">
			{
				data.map(item => {
					return (
						<div className={`drop-shadow-md`}>
							{item.name}
							<img src={item.image} alt="" />
						</div>
					)
				})
			}
		</div>
	)
}

export default Projects
