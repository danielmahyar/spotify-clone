import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LeftSideBar from '../components/index/LeftSideBar'
import PlayBar from '../components/index/PlayBar'
import RightSideBar from '../components/index/RightSideBar'
import {
  RecoilRoot, useRecoilState,
} from 'recoil';
import { playingState } from '../lib/play-atoms'

const tracks = [{
  title: "Cali",
  artist: "Wataboi",
  audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  image: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  color: "#00aeb0"
},
{
  title: "50",
  artist: "tobylane",
  audioSrc: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
  image: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  color: "#ffb77a"
},
{
  title: "I Wonder",
  artist: "DreamHeaven",
  audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  image: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  color: "#5f9fff"
}]

const Home: NextPage = () => {
  const [playing, setPlaying] = useRecoilState(playingState)
  return (
      <main
        className="flex flex-col w-screen h-screen bg-black"
      >
        <div
          className="w-full h-full flex" 
        >
          <LeftSideBar />

          <div
            className="w-full h-full bg-spotify-bg-color"
          >
            {playing && (<p>Playing</p>)}
          </div>

          <RightSideBar />
        </div>

        <PlayBar 
          tracks={tracks}
        />

      </main>
  )
}

export default Home
