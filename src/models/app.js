/* global localStorage, window */
import { Toast } from 'antd-mobile';
import { login, signup } from '../services/app';
import { axios } from '../utils/request';

const ERROR_MSG_DURATION = 3; // 3 秒

export default {
  namespace: 'app',
  state: {
    showLogin: false,
    showSignup: false,
    user: {
      phone: ''
    },
    selected: 1,
    showMask: false
  },
  subscriptions: {
    setup({ dispatch }) {
      const token = localStorage.getItem('jwttoken');
      if (token) {
        axios.defaults.headers.common.Authorization = 'Bearer ' + token;
        dispatch({ type: 'login', payload: { token } });
      } else {
        dispatch({ type: 'showLogin' });
      }
    }
  },
  effects: {
    *login({ payload }, { call, put }) {
      const { data } = yield call(login, payload);
      if (data.tokenLogin) {
        const { tokenLogin, phone } = data;
        yield put({ type: 'loginSuccess', payload: { phone, tokenLogin } });
      } else if (data.message) {
        yield put({
          type: 'loginSuccess',
          payload: {
            user: {
              phone: data.phone
            },
            token: data.token
          }
        });
      } else {
        yield put({
          type: 'loginFail',
          payload: {
            error: data.error,
            tokenFail: data.tokenFail
          }
        });
      }
    },
    *signup({ payload }, { call, put }) {
      const { data } = yield call(signup, payload);
      if (data.message) {
        yield put({ type: 'signupSuccess' });
      } else {
        yield put({
          type: 'signupFail',
          payload: { error: data.error }
        });
      }
    }
  },
  reducers: {
    showLogin(state) {
      return {
        ...state,
        showLogin: true,
        showSignup: false
      };
    },
    showSignup(state) {
      return {
        ...state,
        showLogin: false,
        showSignup: true
      };
    },
    switchTabBar(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    loginSuccess(state, { payload }) {
      if (payload.tokenLogin) {
        return {
          ...state,
          user: { phone: payload.phone },
          showLogin: false,
          showSignup: false
        };
      } else {
        Toast.success('登录成功', ERROR_MSG_DURATION);
        axios.defaults.headers.common.Authorization = 'Bearer ' + payload.token;
        localStorage.setItem('jwttoken', payload.token);
        return {
          ...state,
          ...payload,
          showLogin: false,
          showSignup: false
        };
      }
    },
    signupSuccess(state) {
      Toast.success('注册成功', ERROR_MSG_DURATION);
      return {
        ...state,
        showLogin: true,
        showSignup: false
      };
    },
    logout(state) {
      localStorage.removeItem('jwttoken');
      return {
        ...state,
        showLogin: true
      };
    },
    loginFail(state, { payload }) {
      Toast.fail(payload.error, ERROR_MSG_DURATION);
      localStorage.removeItem('jwttoken');
      return {
        ...state,
        showLogin: true
      };
    },
    signupFail(state, { payload }) {
      Toast.fail(payload.error, ERROR_MSG_DURATION);
      return {
        ...state
      };
    },
    showMask(state) {
      return {
        ...state,
        showMask: true
      };
    },
    hideMask(state) {
      return {
        ...state,
        showMask: false
      };
    }
  }
};
