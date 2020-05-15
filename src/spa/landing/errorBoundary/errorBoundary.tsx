import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {
  children: React.ReactNode;
}

interface ComponentState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, ComponentState> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      this.props.history.push('/error');
    }
    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
