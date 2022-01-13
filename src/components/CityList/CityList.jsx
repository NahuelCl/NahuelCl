import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import convertUnits from 'convert-units'
import Alert from '@material-ui/lab/Alert'
import { Grid, List, ListItem} from '@material-ui/core'
import CityInfo from './../CityInfo/CityInfo'
import Weather from '../Weather/Weather'

const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) =>{
    const { city, country} = cityAndCountry
    //const { temperature, state } = weather
    return(
        <ListItem
            button
            key = {city} onClick={eventOnClickCity}>
            <Grid container
                justifyContent="center"
                allignItems ="center">
                    <Grid item
                        md={9}
                        xs={12}>
                        <CityInfo city = {city} country = {country}/>
                    </Grid>
                    <Grid item
                        md={3}
                        xs={12}>

                            <Weather 
                            temperature={weather && weather.temperature} 
                            state={weather && weather.state} />
                        
                    </Grid>

            </Grid>
        </ListItem>
    ) 
}


const CityList = ({cities, onClickCity}) => {
    const [allWeather, setallWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = (city, country, countryCode) => {
            const appid = "1677b08b2351666a9a6ce22ff3de4553";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}, &appid=${appid}`;
            axios
            .get(url)
            .then(response => {
                const { data } = response
                const temperature =Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0)) 
                const state = data.weather[0].main.toLowerCase()
                const propName = `${city}-${country}`
                const propValue= {temperature, state} 


                setallWeather(allWeather => (
                {...allWeather,[propName]: propValue }
        
                ))

            })
            .catch( error => {
                //Errore que nos responde el server
                if (error.response) {
                    const { data, status} = error.response;
                    console.log("data", data);
                    console.log("status", status);
                    setError("")
                } else if (error.request){
                    console.log("Server in-accesible o no tengo internet");
                }else  {
                    console.log("Server in-accesible o no tengo internet");
                }
            } )
        }
        cities.forEach(({ city, country, countryCode }) => {
            setWeather(city, country, countryCode)
        });
    }, [cities])

    //const weather = { temperature: 10, state: "sunny" }

    return (
        <div>
            {
                error && <Alert severity="error">{error}</Alert>
            }
            <List>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
                        allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
                }
            </List>  
        </div>

    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        countryCode: PropTypes.string.isRequired,
    })).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
