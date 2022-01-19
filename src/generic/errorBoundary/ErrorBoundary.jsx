import React from 'react'

class ErrorBoundary extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            activo: false
        }

    }
    estaActivo = () => {
            return this.state ? "Activo" : "No Activo"
    }

    onClickHandler = () => {
        this.setState({activo: true})
    }

    componentDidMount() {
        console.log("Elcomponenete se ha montado")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("El componenete se ha actualizado")
    }

    componentWillUnmount() {
        console.log("Elcomponenete se ha desmontado")
    }
    

    render() {
        return (
            <div>
                <button onClick= {this.onClickHandler}>
                    Activar
                    </button>
               <h1>
                ErrorBoundary {this.props.saludo}
                {
                    this.estaActivo()
                }
            </h1>
          
            </div>
        )   
    }
}

export default ErrorBoundary