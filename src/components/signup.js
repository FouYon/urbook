import React from 'react';
import { Button, List, InputItem, WhiteSpace, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';

var phone = '';
var password = '';
var chckpass = '';
const Login = ({
  dispatch,
  form: { getFieldProps }
}) => {
  const loginProp = {
    onClick() {
      dispatch({ type: 'app/showLogin' });
    }
  };
  const signupProp = {
    onClick() {
      console.log(phone, password, chckpass);
      dispatch({ type: 'app/signup', payload: { phone, password, chckpass } });
    }
  };
  return (
    <div>
      <WhiteSpace />
      <List renderHeader={() => '注册'}>
        <InputItem
          {...getFieldProps('phone', {
            onChange(val) {
              phone = val;
            }
          })}
          clear
          type='phone'
          placeholder='186 1234 1234'
        >手机号码</InputItem>
        <InputItem
          {...getFieldProps('password', {
            onChange(val) {
              password = val;
            }
          })}
          type='password'
          placeholder='****'
        >密码</InputItem>
        <InputItem
          {...getFieldProps('chckpass', {
            onChange(val) {
              chckpass = val;
            }
          })}
          type='password'
          placeholder='****'
        >确认密码</InputItem>
      </List>
      <WingBlank>
        <WhiteSpace />
        <Button type='primary' {...signupProp}>注册</Button>
        <WhiteSpace />
        <Button type='ghost' {...loginProp}>登录</Button>
      </WingBlank>
    </div>
  );
};

export default createForm()(Login);
