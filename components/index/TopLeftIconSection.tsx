import React from 'react'
import { AiOutlineHome } from "@react-icons/all-files/Ai/AiOutlineHome";
import { BsSearch } from 'react-icons/bs';
import { ImBooks } from 'react-icons/im';

export const TopLeftSectionIcon = () => {
	return (
		<div
			className="flex flex-col space-y-2"
		>
			<div
				className="flex justify-start items-center cursor-pointer py-2 px-4 mx-2 rounded bg-spotify-bg-hover"
			>
				<AiOutlineHome 
					color="white"
					className="mr-5"
					size={25}
				/>
				<p className="text-white font-bold transition ease-in-out hover:text-red-200">Home</p>
			</div>
			<div
				className="flex justify-start items-center cursor-pointer py-2 px-4 mx-2 rounded"
			>
				<BsSearch 
					color="white"
					className="mr-5"
					size={25}
				/>
				<p className="text-white font-bold transition ease-in-out hover:text-red-200">Search</p>
			</div>
			<div
				className="flex justify-start items-center cursor-pointer py-2 px-4 mx-2 rounded"
			>
				<ImBooks  
					color="white"
					className="mr-5"
					size={25}
				/>
				<p className="text-white font-bold transition ease-in-out hover:text-red-200">Library</p>
			</div>
		</div>
	)
}
