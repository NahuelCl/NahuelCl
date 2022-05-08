import React from 'react'

class ErrorBoundary extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            hasError: false
        }

    }

    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    render() {
        return (
            this.state.hasError ? 
            (<h1>Hubo un error</h1>)
            :
            (this.props.children)
        )   
    }
}

export default ErrorBoundary