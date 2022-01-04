import React from 'react'

import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import CityList from '../components/CityList'
import AppFrame from '../components/AppFrame/AppFrame'
import {Paper} from '@material-ui/core'
const cities = [
    {city: "Buenos Aires" , country: "Argentina", countryCode: "AR"},
    {city: "Bogota" , country: "Colombia", countryCode: "CO"},
    {city:"Madrid" , country:"España", countryCode: "ES"},
    {city:"Ciudad De México" , country:"México", countryCode: "MX"},
]

const MainPage = () => {
    const history = useHistory()
    const onClickHandler = () => {
            history.push("./city")
    }
    return (
        <AppFrame>
            <Paper>
                <CityList 
                    cities={cities}
                    onClickCity={onClickHandler}       
                />
            </Paper>
        </AppFrame>
    )
}

MainPage.propTypes = {

}

export default MainPage
