import React, { useEffect, useRef, useState } from 'react'
import { BsHeart } from "react-icons/Bs";
import { useRecoilState } from 'recoil';
import { playingState } from '../../lib/play-atoms';
import AudioMoreControls from './AudioMoreControls';
import AudioPlayer from './AudioPlayer';

//src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"



const PlayBar = ({ tracks }: any) => {


	// State
	const [trackIndex, setTrackIndex] = useState(0);
	const [trackProgress, setTrackProgress] = useState<any>(0);
	const [isPlaying, setIsPlaying] = useRecoilState(playingState);


	const { title, artist, color, image, audioSrc } = tracks[trackIndex];
	
	// Refs
	const audioRef = useRef(
		typeof Audio !== "undefined" ? new Audio(audioSrc) : undefined
	);
	const intervalRef = useRef<any>();
	const isReady = useRef(false);

	const duration= audioRef?.current?.duration;


	useEffect(() => {
		if (isPlaying) {
			audioRef?.current?.play();
			startTimer();
		} else {
			clearInterval(intervalRef.current);
			audioRef?.current?.pause();
		}
	}, [isPlaying]);

	useEffect(() => {
		// Pause and clean up on unmount
		return () => {
		  audioRef?.current?.pause();
		  clearInterval(intervalRef.current);
		}
	}, []);

	// Handle setup when changing tracks
	useEffect(() => {
		audioRef?.current?.pause();
	
		audioRef.current = new Audio(audioSrc);
		setTrackProgress(audioRef.current.currentTime);
	
		if (isReady.current) {
			audioRef.current.play();
			setIsPlaying(true);
			startTimer();
		} else {
			// Set the isReady ref as true for the next pass
			isReady.current = true;
		}
   	}, [trackIndex]);


	const startTimer = () => {
		// Clear any timers already running
		clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			if (audioRef?.current?.ended) {
				toNextTrack();
			} else {
				setTrackProgress(audioRef?.current?.currentTime);
			}
		}, 1000);
	}

	const toPrevTrack = () => {
		if (trackIndex - 1 < 0) {
		  setTrackIndex(tracks.length - 1);
		} else {
		  setTrackIndex(trackIndex - 1);
		}
	   }
	   
	   const toNextTrack = () => {
		if (trackIndex < tracks.length - 1) {
		  setTrackIndex(trackIndex + 1);
		} else {
		  setTrackIndex(0);
		}
	}

	const volumeChange = (volume: number) => {
		audioRef?.current?.volume = volume
		
	}

	return (
		<div
			className="flex flex-shrink-0 justify-center items-center w-full h-28 bg-spotify-play-color overflow-clip"
	   	>
			<div className="w-full ml-5 flex items-center">
				<div>
					<h1 className="text-white font-semibold cursor-pointer hover:underline">Aziz Jan Jigar Jan</h1>
					<p className="text-sm text-spotify-playback-color font-semibold cursor-pointer hover:underline">Jewad Sharif</p>
				</div>
				<div className="ml-10">
					<BsHeart color="white" />
				</div>
			</div>

			<AudioPlayer 
				isPlaying={isPlaying}
				onPrevClick={toPrevTrack}
				onNextClick={toNextTrack}
				onPlayPauseClick={setIsPlaying}
			/>


			<AudioMoreControls 
				volumeChange={volumeChange}
			/>

	   	</div>
	)
}

export default PlayBar
