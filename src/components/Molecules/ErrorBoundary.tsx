import * as Sentry from '@sentry/browser'
import React from 'react'
import Link from '../Atoms/Link'

export interface IErrorBoundaryState {
  hasError?: boolean
}

class ErrorBoundary extends React.Component<IErrorBoundaryState> {
  public static getDerivedStateFromError(error: object) {
    return { hasError: true }
  }
  public state: IErrorBoundaryState
  constructor(props: object) {
    super(props)
    this.state = { hasError: false }
  }
  public componentDidCatch(error: object, info: object) {
    Sentry.configureScope(scope => {
      Object.keys(info).forEach(key => {
        scope.setExtra(key, info[key])
      })
    })
    Sentry.captureException(error)
  }
  public render() {
    const { hasError } = this.state
    if (hasError) {
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
    }
    return this.props.children
  }
}

export default ErrorBoundary
