import TrackList from "./TrackList";
import { Link } from 'react-router-dom';

const Home = ({ trackList }) => {

    return (
        <>
            <Link to={'/add-track'}><button style={{ background: '#ff694a' }}>Add New Track</button></Link>
            <h1>Home Page</h1>
            <TrackList trackList={trackList} />
        </>
    )
}

export default Home