import React, {useState, useEffect} from "react";
import UseGeoLocation from "../geolocation/UseGeoLocation";

const baseURL = 'https://app.ticketmaster.com/discovery/v2/';
const key = "ns2SCrqXEt8N2ap6PDw1zFO935bspXaH";



const GetEvents = () => {
    const [coords, setCoords] = useState('');
    const [data, setData] = useState('');
    // const location = UseGeoLocation();

    
    // window.alert(1);
    // const [results, setResults] = useState([]);

    useEffect(() => {
        if(coords === "") {
            const getPos = (pos) => setCoords(pos.coords)
            const location = navigator.geolocation.getCurrentPosition( getPos );
        }    
    }, [coords])
    console.log(coords);

    const fetchResults = async () => {
        let url = `${baseURL}events.json?apikey=${key}`

        const response = fetch(url)
        .then(res => res.json())
        .then(data => console.log(data._embedded.events))

        return response;
    }

    useEffect(() => {
        if(data === "") {
            const getRes = (res) => setData(fetchResults(data))
        }
    }, [data])
    console.log(data);

    return(
        <div className='main'>
            <div className='mainDiv'>

            </div>
        </div>
    )
}

export default GetEvents;