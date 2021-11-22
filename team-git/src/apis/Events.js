import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "reactstrap";

const baseURL = 'https://app.ticketmaster.com/discovery/v2/';
const key = "ns2SCrqXEt8N2ap6PDw1zFO935bspXaH";

const GetEvents = (props) => {
    const [isLoaded, setIsLoaded] = useState(true);
    const [coords, setCoords] = useState('');
    const [data, setData] = useState([]);
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('')

    useEffect(() => {
        if(lat === "") {
            const getLat = (pos) => setLat(pos.coords.latitude)
            const latitude = navigator.geolocation.getCurrentPosition( getLat );  
        }  
        if(lng === "") {
            const getLng = (pos) => setLng(pos.coords.longitude)
            const longitude = navigator.geolocation.getCurrentPosition( getLng );
        }
    }, [lat, lng])

    useEffect(() => {
        if(lng) {
            console.log("lng:", lng);
        }
        if(lat) {
            console.log("lat:", lat);
        }       
    }, [lng, lat])
   
    const fetchResults = async () => {
        let url = `${baseURL}events.json?&latlong=${lat},${lng}&apikey=${key}`

        const response = await fetch(url)
        .then(res => {
            // setIsLoaded(false);
            const body = res.json()
            return(body)       
        })
        .then(data => setData(data._embedded.events))

        return response;
    }

    useEffect (async () => {
        console.log(!!lat)
        if(data.length < 1 && lat && lng) {
                const myResults = await fetchResults();
                console.log(myResults);
                console.log(data)        
        }
    }, [data, lat, lng])

    useEffect (() => {
        if(data){
            console.log("data:", data);
        }
        
    }, [data])
    
    const dataRenderer = data.map((myData) => {
        return(
            <div>{myData.name}</div>
        )
    })
    
    const content = data.length < 1 ? <div>Loading...</div> : 
    <div>
        {dataRenderer[0]}
        <br/>
        {dataRenderer[1]}
        <br/>
        {dataRenderer[2]}
    </div>

    return(
        <Container>
            <Row>
                <Col md='4'>
                    <div>Image</div>
                </Col>
                <Col md='4'>
                    <h1>Events Near You!</h1>
                   {content}
                </Col>
                <Col md='4' m>
                    Weather
                </Col>
            </Row>
        </Container>
    ) 
}

export default GetEvents;