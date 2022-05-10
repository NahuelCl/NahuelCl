import React, {useState, useEffect} from 'react'
import axios from 'axios'
import convertUnits from 'convert-units'
import { validValues } from '../components/IconState'
import { getCityCode } from '../utils/utils'

const useCityList = (cities) => {
    const [allWeather, setallWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const appid = "1677b08b2351666a9a6ce22ff3de4553";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}, &appid=${appid}`;
            

            try{
                const response = await axios.get(url)
            const { data } = response
            const temperature =Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0)) 
            const state = data.weather[0].main.toLowerCase()
            const propName = getCityCode(city,countryCode)
            const propValue= {temperature, state} 


            setallWeather(allWeather => ({...allWeather,[propName]: propValue }))
            }

            catch (error){
                 //Errore que nos responde el server
                 if (error.response) {
                    setError("Ha ocurrido un error con el servidor de clima")
                } else if (error.request){
                    setError("Verifique la conexion a internet");
                }else  {
                    setError("Error al cargar los datos");
                }
            }

        }
        cities.forEach(({ city, countryCode }) => {
            setWeather(city, countryCode)
        });
    }, [cities])

    return {error, setError, allWeather}

}

export default useCityList