import React from 'react';
import { WhiteSpace } from 'antd-mobile';
import { Button, Row, Form, Input, Icon } from 'antd';
import styles from './login.less';

const FormItem = Form.Item;

const login = ({
  loginButtonLoading,
  onOk,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll
  },
  dispatch
}) => {
  function handleOk() {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      onOk(values);
    });
  }

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <span>二手书交易平台</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请填写手机号' }]
          })(<Input size='large' addonBefore={<Icon type='phone' />} onPressEnter={handleOk} placeholder='手机号' />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请填写密码' }, { type: 'string', min: 6, max: 32, message: '密码最少6位' }]
          })(<Input size='large' addonBefore={<Icon type='lock' />} type='password' onPressEnter={handleOk} placeholder='密码' />)}
        </FormItem>
        <Row>
          <Button type='primary' size='large' onClick={handleOk} loading={loginButtonLoading}>
            登录
          </Button>
          <WhiteSpace />
          <a onClick={() => { dispatch({ type: 'app/showSignup' }); }} style={{ float: 'right', fontSize: 'medium' }}>注册</a>
        </Row>
      </form>
    </div>
  );
};

export default Form.create()(login);
