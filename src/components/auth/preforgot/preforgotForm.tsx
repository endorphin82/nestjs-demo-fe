import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {MailOutlined} from '@ant-design/icons';

import './styles.scss';
import {Link, useHistory} from 'react-router-dom';
import {IForgot} from '../../../types';
import {preforgotSuccessRoute} from "../../../redux/constants/auth";

interface IPreForgotFormProps {
  handleSubmit(values: IForgot): void,

  handleError(error: any): void,
}

export default function PreforgotForm(props: IPreForgotFormProps) {
  // @ts-ignore
  const [form] = Form.useForm()
  let history = useHistory();

  function onFinish(valuefromformlist: any): void {
    form
      .validateFields()
      .then(() => {
        props.handleSubmit(valuefromformlist);
        form.resetFields();
        history.push(preforgotSuccessRoute)
      })
      .catch((error: any) => {
        console.log('Validate Failed:', error);
        return props.handleError(error);
      });
  }

  return (
    // @ts-ignore
    <Form onFinish={onFinish} className="login-form">
      <h3 className="main-label">ENTER EMAIL</h3>
      <Form.Item
        // @ts-ignore
        name="email"
        rules={[{required: true, message: 'Please add your email!'}]}
      >
        <Input
          type="email"
          name="email"
          // @ts-ignore
          prefix={<MailOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Send link for reset password
        </Button>
        Or <Link to="/signup">register now!</Link>
      </Form.Item>
    </Form>
  )
}

