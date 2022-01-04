import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Grid, List, ListItem} from '@material-ui/core'
import CityInfo from './../CityInfo/CityInfo'
import Weather from '../Weather/Weather'

const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) =>{
    const { city, country} = cityAndCountry
    const { temperature, state } = weather
    return(
        <ListItem
            button
            key = {city} onClick={eventOnClickCity}>
            <Grid container
                justify="center"
                allignItems ="center">
                    <Grid item
                        md={9}
                        xs={12}>
                        <CityInfo city = {city} country = {country}/>
                    </Grid>
                    <Grid item
                        md={3}
                        xs={12}>
                        <Weather temperature={temperature} state={state} />
                    </Grid>

            </Grid>
        </ListItem>
    ) 
}

const CityList = ({cities, onClickCity}) => {
    const weather = { temperature: 10, state: "sunny" }
    return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, weather))
            }
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
    })).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
