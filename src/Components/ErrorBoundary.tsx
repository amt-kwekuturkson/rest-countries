import React from "react";

interface Props {
  children?: React.ReactNode;
}
interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({ hasError: false });
  }

  static getDerivedStateFromError(error: boolean): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorInfo">
          <h2>Input does not exist !</h2>
          <p>Clear and reset page</p>
          <button onClick={this.reset}>reset page</button>
        </div>
      );
    }

    return this.props.children;
  }
}
