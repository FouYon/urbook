import React from 'react';
import { Button, List, InputItem, WhiteSpace, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';

var phone = '';
var password = '';
const Login = ({
  dispatch,
  form: { getFieldProps }
}) => {
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
      <WhiteSpace />
      <List renderHeader={() => '登录'}>
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
      </List>
      <WingBlank>
        <WhiteSpace />
        <Button type='primary' {...loginProp}>登录</Button>
        <WhiteSpace />
        <Button type='ghost' {...signupProp}>注册</Button>
      </WingBlank>
    </div>
  );
};

export default createForm()(Login);
