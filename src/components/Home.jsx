import TrackList from "./TrackList"

const Home = ({ trackList }) => {

    return (
        <>
            <h1>Home Page</h1>
            <TrackList trackList={trackList} />
        </>
    )
}

export default Home