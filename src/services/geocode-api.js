import axios from "axios"

export const geocodeApi = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/geocode'
});