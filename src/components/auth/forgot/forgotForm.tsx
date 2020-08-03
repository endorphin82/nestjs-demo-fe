import React from 'react';
import {Form, Input, Button} from 'antd';
import {LockOutlined} from '@ant-design/icons';

import './styles.scss';
import {Link, useLocation} from 'react-router-dom';
import {IForgot} from '../../../types';

interface IForgotFormProps {
  handleSubmit(values: IForgot): void,

  handleError(error: any): void,
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function ForgotForm(props: IForgotFormProps) {
  // @ts-ignore
  const [form] = Form.useForm()
  const query = useQuery();
  const token = query.get("token")

  function onFinish(valuefromformlist: any): void {
    console.log(valuefromformlist);
    const data = {
      token: token,
      password: valuefromformlist.confirmPassword
    } as IForgot
    form
      .validateFields()
      .then(() => {
        props.handleSubmit(data);
        console.log(data);
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
      <h3 className="main-label">CHANGE PASSWORD</h3>
      <Form.Item
        // @ts-ignore
        name="password"
        hasFeedback
        rules={[{required: true, message: 'Please add your Password!'}]}
      >
        <Input.Password
          name="password"
          // @ts-ignore
          prefix={<LockOutlined theme="filled" style={{color: 'rgba(0,0,0,.25)'}}/>}
          // type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        // @ts-ignore
        name="confirmPassword"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          // @ts-ignore
          ({getFieldValue}) => ({
            // @ts-ignore
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password
          name="confirmPassword"
          // @ts-ignore
          prefix={<LockOutlined theme="filled" style={{color: 'rgba(0,0,0,.25)'}}/>}
          placeholder="Confirm Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Change Password
        </Button>
        Or <Link to="/signup">register now!</Link>
      </Form.Item>
    </Form>
  )
}

