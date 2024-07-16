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

const addNew = async (postData)=>{
    //Method: Change the method property to 'POST' to specify that the request should use the POST HTTP method.
    //Headers: Set the Content-Type header to 'application/json' to indicate that the request body contains JSON data
    //Body: Use JSON.stringify(postData) to convert the postData object to a JSON string, which is required for the POST request body.
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    });
    const data = await res.json();
    return data;
}



export {show, addNew};