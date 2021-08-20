import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default { 
    tittle: "AppFrame",
    component: AppFrame
} 

export const AppFrameExample = () => (
        <Router>
            <AppFrame>
                AppFrameasdadasd
            </AppFrame>
        </Router>    
)
 