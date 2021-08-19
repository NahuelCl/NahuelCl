import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const CityPage = props => {
    return (
        <div>
            City
            <div>
                <Link to="/main">Volver a main</Link>
            </div>
        </div>
    )
}

CityPage.propTypes = {

}

export default CityPage
