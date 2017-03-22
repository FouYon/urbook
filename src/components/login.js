import React from 'react';
import { Button, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

const Login = ({ dispatch }) => {
  var phone = '';
  var password = '';
  const loginProp = {
    onClick() {
      dispatch({ type: 'app/login', payload: { phone, password } });
    }
  };
  const signupProp = {
    onClick() {
      dispatch({ type: 'app/showSignup' });
    }
  };
  return (
    <div>
      <InputItem autoFocus type='phone' onChange={(val) => { phone = val; }}>手机号</InputItem>
      <InputItem type='password' onChange={(val) => { password = val; }}>密码</InputItem>
      <Button type='primary' {...loginProp}>登录</Button>
      <Button {...signupProp}>注册</Button>
    </div>
  );
};

export default createForm()(Login);
