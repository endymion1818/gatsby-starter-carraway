import { Link } from '@reach/router'
import * as Sentry from '@sentry/browser'
import React from 'react'

export interface IErrorBoundaryProps {
  error: object
  errorInfo: object
  props: {
    children: string[]
  }
}

export interface IErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<IErrorBoundaryProps> {
  constructor(props) {
    super(props)
    this.state = { hasError: null }
  }

  public componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true })
    Sentry.configureScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
    })
    Sentry.captureException(error)
  }

  public render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError === true) {
      // render fallback UI
      return (
        <>
          <h1>We're sorry</h1>
          <p>
            Something went wrong with this website. I've been informed via{' '}
            <Link to="https://www.sentry.io">Sentry error reporting</Link> and I'll get on a fix out
            as soon as possible.
          </p>
        </>
      )
    } else {
      // when there's not an error, render children untouched
      return children
    }
  }
}
