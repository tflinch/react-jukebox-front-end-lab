

const TrackList = ({ trackList }) => {

    const show = trackList.map(track => {
        return (
            <div key={track._id}>
                <h2>{track.artist}</h2>
                <h2>{track.title}</h2>
            </div>
        )
    })

    return (<>
        <h2>TrackLists</h2>
        {show}
    </>


    )
}

export default TrackList