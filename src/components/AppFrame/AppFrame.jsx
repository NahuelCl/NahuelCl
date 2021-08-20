import React from 'react'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'
import {Link as LinkRouter} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { Grid, AppBar, Toolbar, IconButton, Link } from '@material-ui/core'
import {WiDaySunny} from 'react-icons/wi'
const AppFrame = ({children}) => {
    return (
        <Grid container justify = "center">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton color="inherit" aria-label="menu">
                        <Link component={LinkRouter} to="/main" color="inherit" aria-label="menu">
                            <IconContext.Provider value={{size:'2em'}}>
                                <WiDaySunny/>
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography variant="h6" color = "inherit">
                        Weather App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container item
                xs={12}
                sm={11}
                md={10}
                lg={8}>
                    {children}
            </Grid>
        </Grid>
    )
}

AppFrame.propTypes = {
    children: PropTypes.node
}

export default AppFrame
