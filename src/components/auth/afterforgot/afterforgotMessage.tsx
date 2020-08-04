import React from 'react';
import {Form} from 'antd';

import './styles.scss';
import {Link, useHistory} from 'react-router-dom';


export default function AfterforgotMessage() {
  // @ts-ignore

  return (
    // @ts-ignore
    <Form className="login-form">
      <h3 className="main-label">Check email for reset password</h3>

      <Form.Item>
        <Link to="/">Home </Link>
         or <Link to="/signup">register now!</Link>
      </Form.Item>
    </Form>
  )
}

