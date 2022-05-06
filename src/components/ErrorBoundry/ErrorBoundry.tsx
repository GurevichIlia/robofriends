import React, { Component } from 'react';

class ErrorBoundry extends Component<any, { hasError: boolean }> {

  constructor(props: any) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true })

  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundry