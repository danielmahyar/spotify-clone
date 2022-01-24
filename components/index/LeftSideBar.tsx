import Image from 'next/image'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { TopLeftSectionIcon } from './TopLeftIconSection'

const LeftSideBar = () => {
	return (
		<section
			className="w-56 flex-shrink-0 h-full bg-black flex flex-col"
		>
			{/* Scrollable div */}
			<div
				className="h-full overflow-y-auto overflow-x-hidden"
			>
				<div
					className="ml-4 mt-4 mb-2"
				>
					<BsThreeDots
						color="white"
						size={30}
					/>
				</div>

				<TopLeftSectionIcon />

			</div>

			<div
				className="h-2/5 w-full relative overflow-hidden"
			>
				<Image 
					src="https://1265745076.rsc.cdn77.org/1024/jpg/75225-juice-wrld-legends-never-die-LP-5f6dbc88ba72a.jpg"
					width={100}
					height={100}
					layout='fill'
				/>
			</div>


		</section>
	)
}

export default LeftSideBar
