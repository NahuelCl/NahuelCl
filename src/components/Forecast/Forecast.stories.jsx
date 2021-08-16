import React from 'react'
import Forecast from './Forecast'

export default {
    title: 'Forecast',
    component: Forecast
}

const forecastItemList = [
    { hour: 18, state:"sunny", temperature:24, weekDay:"Jueves" },
    { hour: 7, state:"cloud", temperature:22, weekDay:"Viernes"},
    { hour: 5, state:"rain", temperature:5, weekDay:"Miercoles" },
    { hour: 9, state:"fog", temperature:11, weekDay:"Sábado"},
]
 
export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)
