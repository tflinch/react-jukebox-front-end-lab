import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const TrackForm = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        artist: '',
        title: '',
    })

    const handleSumbit = (e) => {
        e.preventDefault()
        console.log("Handle Submit")
        props.fetchData(formData)
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
                <button type="submit">Add New Track</button>
            </form>
            <Link to={'/'}><button>Home</button></Link>
        </>
    )
}

export default TrackForm