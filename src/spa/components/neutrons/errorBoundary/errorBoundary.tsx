import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<Props> {
  public componentDidCatch(): void {
    this.props.history.push('/error');
  }

  public render(): React.ReactNode {
    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
