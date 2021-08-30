import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default { 
    title: "AppFrame",
    component: AppFrame
} 

export const AppFrameExample = () => (
        <Router>
            <AppFrame>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quas molestias ipsa alias corporis saepe voluptatibus similique possimus iure. Ex quas deserunt inventore aut doloribus praesentium consectetur autem expedita enim.
            </AppFrame>
        </Router>    
)
 