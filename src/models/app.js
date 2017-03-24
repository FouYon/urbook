import { Toast } from 'antd-mobile';
import { login, signup, logout } from '../services/app';

const ERROR_MSG_DURATION = 3; // 3 秒

export default {
  namespace: 'app',
  state: {
    showLogin: false,
    showSignup: false,
    user: {
      phone: ''
    },
    selected: 1
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'showLogin' });
    }
  },
  effects: {
    *login({ payload }, { call, put }) {
      const { data } = yield call(login, payload);
      if (data.message) {
        yield put({
          type: 'loginSuccess',
          payload: {
            user: {
              phone: data.phone
            }
          }
        });
      } else {
        yield put({
          type: 'loginFail',
          payload: {
            error: data.error
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
    },
    *logout({ payload }, { call, put }) {
      const { data } = yield call(logout, payload);
      if (data.message) {
        yield put({ type: 'logoutSuccess' });
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
      Toast.success('登录成功', ERROR_MSG_DURATION);
      return {
        ...state,
        ...payload,
        showLogin: false,
        showSignup: false
      };
    },
    signupSuccess(state) {
      Toast.success('注册成功', ERROR_MSG_DURATION);
      return {
        ...state,
        showLogin: true,
        showSignup: false
      };
    },
    logoutSuccess(state) {
      return {
        ...state,
        showLogin: true
      };
    },
    loginFail(state, { payload }) {
      Toast.fail(payload.error, ERROR_MSG_DURATION);
      return {
        ...state
      };
    },
    signupFail(state, { payload }) {
      Toast.fail(payload.error, ERROR_MSG_DURATION);
      return {
        ...state
      };
    }
  }
};
