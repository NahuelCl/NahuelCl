import React from 'react'
import ForecastItem from './ForecastItem'

export default {
    title: "ForcastItem",
    component: ForecastItem
}

export const LunesSoleado = () => (
    <ForecastItem hour={10} state="sunny" temperature={23} weekDay="Lunes"/>
)