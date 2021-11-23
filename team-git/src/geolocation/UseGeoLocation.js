import React, { useEffect, useState } from "react";

const UseGeoLocation = () => {
    // initially sets state variable of location to an empty object of lat and lng, with loaded being false
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: ""}
    });

    // when successfully getting user's location, sets location to loaded= true and fills the object with their lat and long
    const onSuccess = location => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    }

    // if user blocks location, or if browser doesn't support geolocation, errors
    const onError = error => {
        setLocation({
            loaded: true,
            error,
        })
    }

    // Checks if user's browser supports geolocation
    useEffect(() => {
        if(!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            })
        }

        // Gets users location
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }, [])

        // returns location object which can be accessed throughout the project
    return location;
}

export default UseGeoLocation;