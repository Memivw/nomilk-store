import React from 'react';

export default (routeName) => (Wrap) => {
  class WrapperComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
        openAlert: false,
        backClose: false,
        loadingText: 'กำลังโหลด',
        typeAlert: '',
        messageAlert: '',
      };
      this.snackbarRef = React.createRef();
    }

    handleAlert = (type, message) => {
      this.setState({
        typeAlert: type,
        messageAlert: message,
      });
      this.snackbarRef.current && this.snackbarRef.current.open();
    };

    render() {
      return (
        <>
          <Wrap
            {...this.props}
            {...this.state}
            onOpenAlert={this.handleAlert}
          />
        </>
      );
    }
  }

  return WrapperComponent;
};
