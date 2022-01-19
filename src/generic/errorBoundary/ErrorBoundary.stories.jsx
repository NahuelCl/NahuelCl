import React from 'react'
import ErrorBoundary from  './ErrorBoundary'

export default{
    title: "ErrorBoundary",
    component: ErrorBoundary
}

export const ErrorBoundaryWithError = ()  => (
        <ErrorBoundary  />
    )

export const ErrorBoundaryWithoutError = ()  => (
        <ErrorBoundary  />
    )    