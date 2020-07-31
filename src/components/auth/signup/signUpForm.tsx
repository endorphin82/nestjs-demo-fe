import React from 'react';
import {Form, Input, Button, Select} from 'antd';
import {LockOutlined, MailOutlined, UserOutlined, IdcardOutlined, ManOutlined, WomanOutlined} from '@ant-design/icons';
import './styles.scss';
import {Link} from 'react-router-dom';
import {ISignUp} from "../../../types";

const {Option} = Select;

interface ISignUpFormProps {
  handleSubmit(values: ISignUp): void;

  handleError(error: any): void;
}

export default function SignUpForm(props: ISignUpFormProps) {
  // @ts-ignore
  const [form] = Form.useForm()

  function onFinish(valuefromformlist: any): void {
    form
      .validateFields()
      .then(() => {
        console.log("finish values", valuefromformlist);
        props.handleSubmit(valuefromformlist);
        form.resetFields();
      })
      .catch((error: any) => {
        console.log('Validate Failed:', error);
        return props.handleError(error);
      });
  }

  function compareToFirstPassword(rule: any, value: string, callback: Function) {

    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  return (
    // @ts-ignore
    <Form onFinish={onFinish} className="signup-form" layout="horizontal">
      <h3 className="main-label">SIGN UP</h3>
      <Form.Item
        // @ts-ignore
        name="firstName"
        rules={[{required: true, message: 'Please add your First Name!'}]}
      >
        <Input
          type="text"
          name="firstName"
          // @ts-ignore
          prefix={<UserOutlined theme="filled" style={{color: 'rgba(0,0,0,.25)'}}/>}
          placeholder="First Name"
        />
      </Form.Item>
      <Form.Item
        // @ts-ignore
        name="lastName"
        rules={[{required: true, message: 'Please add your Last Name!'}]}
      >
        <Input
          type="text"
          name="lastName"
          // @ts-ignore
          prefix={<IdcardOutlined theme="filled" style={{color: 'rgba(0,0,0,.25)'}}/>}
          placeholder="Last Name"
        />
      </Form.Item>
      <Form.Item
        // @ts-ignore
        name="gender"
        rules={[{required: true, message: 'Please select your gender!'}]}
      >

        <Select
          placeholder="Select gender">
          <Option value="male"          // @ts-ignore
                  key="gender" name="gender"><ManOutlined style={{color: 'rgba(0,0,0,.25)'}}/> Male</Option>
          <Option value="female"        // @ts-ignore
                  name="gender"><WomanOutlined style={{color: 'rgba(0,0,0,.25)'}}/> Female</Option>
        </Select>
      </Form.Item>
      <Form.Item
        // @ts-ignore
        name="email"
        rules={[{required: true, message: 'Please add your email!'}]}
      >

        <Input
          type="email"
          name="email"
          // @ts-ignore
          prefix={<MailOutlined theme="filled" style={{color: 'rgba(0,0,0,.25)'}}/>}
          placeholder="Email"
        />
      </Form.Item>
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
        <Button type="primary" htmlType="submit" className="signup-form-button">
          Sign Up
        </Button>
        Or <Link to="/">Log In</Link>
      </Form.Item>
    </Form>
  )
}
