import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const WelcomeScreen = ({children}) => {
    return (
        <div>
            Welcome Screen
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,

}

export default WelcomeScreen
