import { atom, selector } from 'recoil'

export const playingState = atom({
  key: 'playing',
  default: false,
})

export const volumeState = atom({
  key: 'volume',
  default: 0,
})