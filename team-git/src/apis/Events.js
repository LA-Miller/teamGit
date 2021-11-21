import React, {useState, useEffect} from "react";
import UseGeoLocation from "../geolocation/UseGeoLocation";

const baseURL = 'https://app.ticketmaster.com/discovery/v2/';
const key = "ns2SCrqXEt8N2ap6PDw1zFO935bspXaH";



const GetEvents = (props) => {
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
        // let myData = null;

        const response = fetch(url)
        .then(res => {
            const body = res.json()
            return(body)
        })
        // .then(data => data)

        return response;
    }

    useEffect (async () => {
        if(data === "") {
            const myResults = await fetchResults();

            console.log(myResults);
        }
    }, [data])
    

    return(
        <div className='main'>
            <div className='mainDiv'>
                <p>{data._embedded}</p>
            </div>
        </div>
    )
}

export default GetEvents;