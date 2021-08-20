import React from 'react'
import PropTypes from 'prop-types'
import { Grid, List, ListItem} from '@material-ui/core'

import CityInfo from './../CityInfo/CityInfo'
import Weather from '../Weather/Weather'

const renderCityAndCountry = eventOnClickCity => cityAndCountry =>{
    const { city, country} = cityAndCountry

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
                        <Weather temperature={10} state="sunny" />
                    </Grid>

            </Grid>
        </ListItem>
    ) 
}

const CityList = ({cities, onClickCity}) => {
    return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
