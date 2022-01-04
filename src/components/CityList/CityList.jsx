import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
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
                        {
                            weather ?
                            (<Weather 
                            temperature={weather.temperature} 
                            state={weather.state} />) : ("No hay datos")
                        }
                    </Grid>

            </Grid>
        </ListItem>
    ) 
}


const CityList = ({cities, onClickCity}) => {
    const [allWeather, setallWeather] = useState({})

    useEffect(() => {
        const setWeather = (city, country, countryCode) => {
            const appid = "1677b08b2351666a9a6ce22ff3de4553";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}, &appid=${appid}`;
            axios
            .get(url)
            .then(response => {
                const { data } = response
                const temperature = data.main.temp
                const state = data.weather[0].main.toLowerCase()
                const propName = `${city}-${country}`
                const propValue= {temperature, state} 


                setallWeather(allWeather => (
                {...allWeather,[propName]: propValue }
        
                ))

            })
        }
        cities.forEach(({ city, country, countryCode }) => {
            setWeather(city, country, countryCode)
        });
    }, [cities])

    //const weather = { temperature: 10, state: "sunny" }

    return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
                    allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
            }
        </List>
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
