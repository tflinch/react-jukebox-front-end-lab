import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import * as trackService from './services/trackServices'
import TrackForm from './components/TrackForm';

const App = () => {
  const [trackList, setTrackList] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const data = await trackService.show();
      console.log('Frontend Data', data)
      const tracks = data.map(track => {
        return {
          artist: track.artist,
          title: track.title
        }
      })
      setTrackList(tracks)
      console.log('tracklist log- \n', trackList)
    }
    fetchData()
  }, [])

  return <>
    <Routes>
      <Route path="/" element={<Home trackList={trackList} />} />
      <Route path="/add-track" element={<TrackForm fetchData={trackService.addNew} />} />
    </Routes>
  </>;
};

export default App;