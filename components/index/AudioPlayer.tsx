import React from 'react'
import { AiFillStepBackward, AiOutlineStepForward } from 'react-icons/ai'
import { BsFillPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs'
import { useRecoilState } from 'recoil'
import { playingState } from '../../lib/play-atoms'

const AudioPlayer = ({
		isPlaying,
		onPlayPauseClick,
		onPrevClick,
		onNextClick,
	}: any) => {


	return (
		<div
		className="w-full flex flex-col space-y-2 select-none"
	>
		<div
			className="flex items-center justify-center space-x-5"
		>
			<AiFillStepBackward 
				onClick={onPrevClick}
				className="transition text-spotify-playback-color hover:text-white"
				size={20}
			/>

			{isPlaying ? (
				<BsPauseCircleFill 
					color="white"
					onClick={() => onPlayPauseClick(false)}
					className="transform transition cursor-pointer scale-100 hover:scale-105"
					size={30}
				/>
			) : (
				<BsFillPlayCircleFill 
					color="white"
					onClick={() => onPlayPauseClick(true)}
					className="transform transition cursor-pointer scale-100 hover:scale-105"
					size={30}
				/>
			)}


			<AiOutlineStepForward 
				className="transition text-spotify-playback-color hover:text-white"
				onClick={onNextClick}
				size={20}
			/>
		</div>
		<div
			className="w-full flex space-x-4 items-center"
		>
			<p className="text-gray-100 text-sm">0:00</p>
			<input type="range" min="1" max="100" step="1" className="rounded-lg overflow-hidden appearance-none bg-spotify-playback-color h-1 w-full" />
			<p className="text-gray-100 text-sm">2:29</p>
		</div>
	</div>
	)
}

export default AudioPlayer
