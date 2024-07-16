import './TrackList.css'
const TrackList = ({ trackList }) => {

    const show = trackList.map(track => {
        return (
            <div key={track._id} style={{ background: '#333333', padding: '2em' }}>
                <div className='hero__container'>
                    <p>{track.title}</p>
                    <p className='accent'>{track.artist}</p>
                </div>
                <div className="hero__grid">
                    <button>Play</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    })

    return (<>
        <h2>Track Lists</h2>
        <div className='track__container'>
            {show}
        </div>
    </>


    )
}

export default TrackList