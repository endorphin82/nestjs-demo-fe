import React, { Dispatch } from 'react';
import { Result, Button } from 'antd';
import { push } from 'react-router-redux'
import { connect } from "react-redux";

function AfterForgotPage(props: ReturnType<typeof mapDispatchToProps>) {
  return <Result
    status="success"
    title="link for reset password send in email!"
    subTitle="Check email for reset password"
    extra={[
      <Button
        type="primary"
        key="console"
        onClick={props.forwardTo}>
        Go to SignIn
      </Button>
    ]}
  />;
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  forwardTo: () => dispatch(push('/'))
});

export default connect(null, mapDispatchToProps)(AfterForgotPage);
