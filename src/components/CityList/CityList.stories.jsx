import React from 'react'
import CityList from './CityList'

export default{
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Buenos Aires" , country: "Argentina"},
    {city: "Bogota" , country: "Colombia"},
    {city:"Madrid" , country:"España"},
    {city:"Ciudad De Mexico" , country:"Mexico"},
]

export const CityListExample = () => <CityList cities ={cities}/>