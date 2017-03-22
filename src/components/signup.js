import React from 'react';
import { Button, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

const Signup = ({ dispatch }) => {
  var phone = '';
  var password = '';
  var chckpass = '';
  const signupProp = {
    onClick() {
      dispatch({ type: 'app/signup', payload: { phone, password, chckpass } });
    }
  };
  const loginProp = {
    onClick() {
      dispatch({ type: 'app/showLogin' });
    }
  };
  return (
    <div>
      <InputItem autoFocus type='phone' onChange={(val) => { phone = val; }}>手机号</InputItem>
      <InputItem type='password' onChange={(val) => { password = val; }}>密码</InputItem>
      <InputItem type='password' onChange={(val) => { chckpass = val; }}>确认密码</InputItem>
      <Button type='primary' {...signupProp}>注册</Button>
      <Button {...loginProp}>登录</Button>
    </div>
  );
};

export default createForm()(Signup);
