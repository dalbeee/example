import NextError from "next/error";
import Router from "next/router";
import React, { PropsWithChildren } from "react";

import { HttpException } from "../share/errors/httpException";

type ErrorBoundaryProps = PropsWithChildren<{}>;

interface ErrorBoundaryState {
  error: HttpException | null;
}

const errorBoundaryState: ErrorBoundaryState = {
  error: null,
};

export default class HttpErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = errorBoundaryState;
  }

  componentDidMount() {
    window.addEventListener("unhandledrejection", this.handleRejectedPromise);
    Router.events.on("routeChangeComplete", this.resetState);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.handleRejectedPromise
    );
    Router.events.off("routeChangeComplete", this.resetState);
  }

  private resetState = () => {
    this.setState(errorBoundaryState);
    window.addEventListener("unhandledrejection", this.handleRejectedPromise);
  };

  private setError = (error: HttpException) => {
    this.setState({ error });
  };

  private handleRejectedPromise = (event: PromiseRejectionEvent) => {
    event.preventDefault();
    this.setError(event.reason);
  };

  render() {
    const { error } = this.state;

    if (error instanceof HttpException) {
      return <NextError statusCode={error.status} />;
    }

    return <>{this.props.children}</>;
  }
}
