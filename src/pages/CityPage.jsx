import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Grid} from '@material-ui/core'
import 'moment/locale/es'
import { useParams } from 'react-router-dom'
import AppFrame from '../components/AppFrame/AppFrame'
import CityInfo from '../components/CityInfo/CityInfo'
import Weather from '../components/Weather/Weather'
import WeatherDetails from '../components/WeatherDetails'
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'
import moment from 'moment'

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

const forecastItemListExample = [
    { hour: 18, state:"clear", temperature:24, weekDay:"Jueves" },
    { hour: 7, state:"clouds", temperature:22, weekDay:"Viernes"},
    { hour: 5, state:"rain", temperature:5, weekDay:"Miercoles" },
    { hour: 9, state:"drizzle", temperature:11, weekDay:"Sábado"},
]


const CityPage = () => {

    const [data, setdata] = useState(null)

    const [forecastItemList, setforecastItemList] = useState(null)

    const {city, countryCode} = useParams()


    useEffect( () => {

       const getForecast =async () =>{
           const appid= "7f3839b077ab9ee136b012dfe5029127"
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`
        
            try{
                const {data} = await axios.get(url)

                console.log(data)

                const daysAhead = [0, 1, 2, 3, 4]
                const days= daysAhead.map(d => moment().add(d,'d'))
                const dataAux = days.map(day => {
                    /*"dayHour": "Vie 12",
                      "min": 18,
                      "max": 28,*/
                    const tempObjArray = data.list.filter(item => {
                        const dayofYear = moment.unix(item.dt).dayOfYear()
                        return dayofYear === day.dayOfYear()
                    })

                    console.log("day.dayOfYear()",day.dayOfYear())
                    console.log("tempObjArray",tempObjArray)
                    
                    return ({
                        dayHour: day.format('ddd'),
                        min: 18,
                        max: 28
                    })
                })
                
                setdata(dataAux)
                setforecastItemList(forecastItemListExample)
            } catch (error){
                console.log(error)
            } 
       }

       getForecast()
       
    }, [city, countryCode])
    

  
    const country = "Argentina"
    const state ="clouds"
    const temperature = 20
    const humidity = 80
    const wind = 50
//    const data = dataExample
//    const forecasteItemList = forecastItemList

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
                {
                    data && <ForecastChart data={data} />
                }   
                </Grid>
                <Grid item>
                    {
                        forecastItemList && <Forecast forecastItemList={forecastItemList}/>
                    }
                </Grid>
            </Grid>
        </AppFrame> 
    )
}


export default CityPage

