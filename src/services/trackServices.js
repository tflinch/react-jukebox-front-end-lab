const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;


const show = async()=>{
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}


export {show};