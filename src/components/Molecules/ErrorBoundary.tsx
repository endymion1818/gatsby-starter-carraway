/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as Sentry from '@sentry/browser'
import React, { ErrorInfo } from 'react'
import Link from '../Atoms/Link'

export interface IErrorBoundaryState {
  hasError?: boolean
}

class ErrorBoundary extends React.Component<IErrorBoundaryState> {
  public static getDerivedStateFromError() {
    return { hasError: true }
  }
  public state: IErrorBoundaryState
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    Sentry.configureScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key as keyof React.ErrorInfo])
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
