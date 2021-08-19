import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const NotFoundPage = props => {
    return (
        <div>
            Not Found
             <div>
                <Link to="/main">Volver a main</Link>     
           </div>     
        </div>
    )
}

NotFoundPage.propTypes = {

}

export default NotFoundPage
