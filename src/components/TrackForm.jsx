import { useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';


const TrackForm = (props) => {
    const navigate = useNavigate();
    const { trackId } = useParams();
    const [formData, setFormData] = useState({
        artist: '',
        title: '',
        id: trackId || null
    })
    let fetchData = ''
    console.log('track -id', trackId)


    const handleSumbit = (e) => {
        e.preventDefault()
        if (props.fetchData) {
            fetchData = props.fetchData;
        } if (props.updateTrack) {
            fetchData = props.updateTrack

            setFormData({ ...formData, id: trackId })
        }
        console.log('Form Data', formData)
        fetchData(formData)
        navigate('/')
    }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }



    return (
        <>
            <form onSubmit={handleSumbit}>
                <label htmlFor="artist">Artist</label>
                <input type="text" name="artist" id="artist" value={formData.artist} onChange={handleChange} required />
                <label htmlFor="title">Track Name:</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required></input>
                {!props.updateTrack === null ? <button type="submit">Edit Track</button> : <button type="submit">Add New Track</button>}
            </form>
            <Link to={'/'}><button>Home</button></Link>
        </>
    )
}

export default TrackForm