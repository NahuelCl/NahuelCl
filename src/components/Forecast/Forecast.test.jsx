import React from 'react'
import Forecast from './Forecast'
import {render} from '@testing-library/react'

const forecastItemList = [
    { hour: 18, state:"clear", temperature:24, weekDay:"Jueves" },
    { hour: 7, state:"clouds", temperature:22, weekDay:"Viernes"},
    { hour: 5, state:"rain", temperature:5, weekDay:"Miercoles" },
    { hour: 9, state:"drizzle", temperature:11, weekDay:"Sábado"},
]
 

test('Forecast render', async () => {
    //Generar una constante 
    const { findAllByTestId } = 
            render(
                    <Forecast  
                        forecastItemList={forecastItemList}/>)

    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(4)

})