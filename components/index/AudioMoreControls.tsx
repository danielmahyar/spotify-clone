import React from 'react'
import { BsFillVolumeDownFill, BsFillVolumeMuteFill, BsFillVolumeUpFill, BsFillSpeakerFill } from 'react-icons/bs'
import { RiPlayList2Fill } from 'react-icons/ri'
import { GiMicrophone } from 'react-icons/gi'
import { useRecoilState } from 'recoil'
import { volumeState } from '../../lib/play-atoms'
import { AiOutlineArrowsAlt } from 'react-icons/ai'

const classNameForIcons = "transition text-spotify-playback-color hover:text-white"
const iconConfig = {
	className: classNameForIcons,
	size: 18
}

const AudioMoreControls = ({ volumeChange }: any) => {
	const [volume, setVolume] = useRecoilState(volumeState)

	const sortVolumeUI = () => {


		if(volume > 0 && volume < 50) return (<BsFillVolumeDownFill {...iconConfig} />)
		else if (volume >= 50 && volume <= 100) return (<BsFillVolumeUpFill {...iconConfig}/>)
		else if (volume === 0) return (<BsFillVolumeMuteFill {...iconConfig} />)
		else return <BsFillVolumeMuteFill {...iconConfig} />
	}

	return (
		<div className="w-full flex space-x-3 justify-end mr-5">
			<div
				className="flex items-center justify-center space-x-3"
			>
				<GiMicrophone {...iconConfig} />
				<RiPlayList2Fill {...iconConfig} />
				<BsFillSpeakerFill {...iconConfig} />
			</div>

			<div
				className="flex justify-center items-center mx-12"
			>
				<div
					className="flex justify-center items-center"
				>
					{sortVolumeUI()}
				</div>
				<div
					className="flex justify-center items-center"
				>
					<input 
						type="range"
						onInput={(e) => volumeChange(e.currentTarget.valueAsNumber)}
						min="0"
						max="1" 
						step="0.05"
						className="rounded-lg overflow-hidden appearance-none bg-spotify-playback-color h-1 w-24" 
					/>
				</div>
			</div>

			<div
				className="flex justify-center items-center"
			>
				<AiOutlineArrowsAlt {...iconConfig}/>
			</div>
		</div>
	)
}

export default AudioMoreControls
