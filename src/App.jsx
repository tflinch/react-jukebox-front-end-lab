import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import * as trackService from './services/trackServices'
import TrackForm from './components/TrackForm';

const App = () => {
  const [trackList, setTrackList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await trackService.show();
        const tracks = data.map(track => ({
          artist: track.artist,
          title: track.title,
          id: track._id
        }));
        setTrackList(tracks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [trackList]);

  return <>
    <Routes>
      <Route path="/" element={<Home trackList={trackList} />} />
      <Route path="/add-track" element={<TrackForm fetchData={trackService.addNew} />} />
      <Route
        path="/edit-track/:trackId"
        element={<TrackForm fetchData={trackService.updateTrack} />}
      />
    </Routes>
  </>;
};

export default App;