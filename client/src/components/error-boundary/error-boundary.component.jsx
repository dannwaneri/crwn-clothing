import React from 'react';

import {ErrorImageOverlay,ErrorImageContainer,ErrorImageText} from './error-boundary.styles';

class ErrorBoundary  extends React.Component {
constructor() {
  super()
  this.state = {
      hasErrored: false
  };
}

static getDerivedStateFromError(error){
    // process errors
    return {hasErrored:true};
}
componentDidCatch(error,info) {
    console.log(error);
}

render() {
    if(this.state.hasErrored){
        return (
         <ErrorImageOverlay>
            <ErrorImageContainer imageUrl='https://i.imgur.com/yw2w9sc.png'>
                <ErrorImageText>Sorry this page is broken</ErrorImageText>
            </ErrorImageContainer>
        </ErrorImageOverlay>
            );
    }
    return this.props.children
}
}

export default ErrorBoundary;