import React, { Component } from "react";
import somethingWentWrong from "../../assets/somethingWentWrong.jpg";

export class ErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(children: React.ReactNode) {
    super({ children });

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("Error: ", error);
    console.log("Error Stack: ", errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <main className="absolute inset-0 overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={somethingWentWrong}
            alt="Something went wrong..."
          />
        </main>
      );
    } else return this.props.children;
  }
}

export default ErrorBoundary;
