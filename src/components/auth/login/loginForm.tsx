import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {LockOutlined, MailOutlined} from '@ant-design/icons';

import Icon from '@ant-design/icons'
import './styles.scss';
import {Link} from 'react-router-dom';
import {ILogin} from '../../../types';

interface ILoginFormProps {
  handleSubmit(values: ILogin): void,

  handleError(error: any): void,
}

export default function LoginForm(props: ILoginFormProps) {
  // @ts-ignore
  const [form] = Form.useForm()

  function onFinish(valuefromformlist: any): void {
    form
      .validateFields()
      .then(() => {
        props.handleSubmit(valuefromformlist);
        form.resetFields();
      })
      .catch((error: any) => {
        console.log('Validate Failed:', error);
        return props.handleError(error);
      });
  }

  return (
    // @ts-ignore
    <Form onFinish={onFinish} className="login-form">
      <h3 className="main-label">LOG IN</h3>
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
      <Form.Item
        // @ts-ignore
        name="password"
        rules={[{required: true, message: 'Please add your Password!'}]}
      >
        <Input.Password
          // @ts-ignore
          prefix={<LockOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
          name="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        // @ts-ignore
        name="remember"
        initialValue={true}
        valuePropName='checked'
      >
        <Checkbox name="remember"
          // onChange={handleChange}
        >Remember me</Checkbox>
      </Form.Item>
      <Form.Item>
        <Link to="/forgot" className="login-form-forgot">
          Forgot password
        </Link>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/signup">register now!</Link>
      </Form.Item>
    </Form>
  )
}

