import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = []

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList}/>)
