import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const WelcomePage = props => {
    return (
        <div>
            Welcome
            <div>
                <Link to="/main">Ir a main</Link>
            </div>
        </div>
        
    )
}

WelcomePage.propTypes = {

}

export default WelcomePage
