import React from 'react'
import {Grid} from '@material-ui/core'
import AppFrame from '../components/AppFrame/AppFrame'
import CityInfo from '../components/CityInfo/CityInfo'
import Weather from '../components/Weather/Weather'
import WeatherDetails from '../components/WeatherDetails'
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]

const forecastItemList = [
    { hour: 18, state:"sunny", temperature:24, weekDay:"Jueves" },
    { hour: 7, state:"cloud", temperature:22, weekDay:"Viernes"},
    { hour: 5, state:"rain", temperature:5, weekDay:"Miercoles" },
    { hour: 9, state:"fog", temperature:11, weekDay:"Sábado"},
]


const CityPage = props => {
    const city = "Buenos Aires"
    const country = "Argentina"
    const state ="cloudy"
    const temperature = 20
    const humidity = 80
    const wind = 50
    const data = dataExample
    const forecasteItemList = forecastItemList

    return (   
        <AppFrame>
            <Grid container
                justify="center"
                direction="column"
                spacing={2}>
                <Grid item container 
                    xs={12}
                    justify="center"
                    alignItems="flex-end">
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid container item xs={12}
                    justify="center">
                    <Weather state={state} temperature={temperature}/>
                    <WeatherDetails humidity={humidity} wind={wind}/>
                </Grid>
                <Grid item>
                    <ForecastChart data={data}/>
                </Grid>
                <Grid item>
                    <Forecast forecastItemList={forecasteItemList}/>
                </Grid>
            </Grid>
        </AppFrame> 
    )
}


export default CityPage

