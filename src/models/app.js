/* global localStorage, window, document */
import { Toast } from 'antd-mobile';
import { login, signup, getcomments, getbook, post } from '../services/app';
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
    showMask: false,
    showPost: false,
    bookData: [],
    cur: {},
    comments: [],
    title: '',
    content: '',
    price: 10,
    postfiles: []
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
    },
    *getcomments({ payload }, { call, put }) {
      const { data } = yield call(getcomments, payload);
      if (data.message) {
        yield put({ type: 'updateComments', payload: data });
      } else {
        yield put({
          type: 'updateCommentsFail',
          payload: { error: data.error }
        });
      }
    },
    *getbook({ payload }, { call, put }) {
      const { data } = yield call(getbook, payload);
      if (data.message) {
        yield put({ type: 'updateBook', payload: data });
      } else {
        yield put({
          type: 'updateBookFail',
          payload: { error: data.error }
        });
      }
    },
    *post({ payload }, { call, put }) {
      const postData = payload;
      postData.postBy = localStorage.getItem('phone');
      const { data } = yield call(post, payload);
      if (data.message) {
        yield put({ type: 'postSuccess', payload: postData });
        yield put({ type: 'getbook' });
      } else {
        yield put({ type: 'postFail', payload: { error: data.error } });
      }
    }
  },
  reducers: {
    updatePrice(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    updateTitle(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    updateContent(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    postSuccess(state) {
      Toast.success('发布成功', ERROR_MSG_DURATION);
      document.getElementsByName('postclear').forEach((e) => (e.value = ''));
      return {
        ...state,
        title: '',
        content: '',
        postfiles: [],
        price: 10
      };
    },
    postFail(state, { payload }) {
      Toast.fail(payload.error, ERROR_MSG_DURATION);
      return {
        ...state
      };
    },
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
        localStorage.setItem('phone', payload.phone);
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
        localStorage.setItem('phone', payload.user.phone);
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
    updateCur(state, { payload }) {
      const { user, title } = payload;
      const cur = state.bookData.find(d => d.user === user && d.title === title);
      return {
        ...state,
        cur
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
    },
    showPost(state) {
      return {
        ...state,
        showPost: true
      };
    },
    hidePost(state) {
      return {
        ...state,
        showPost: false
      };
    },
    updateComments(state, { payload }) {
      return {
        ...state,
        comments: payload.data
      };
    },
    updateCommentsFail(state, { payload }) {
      Toast.fail(payload.error, ERROR_MSG_DURATION);
      return {
        ...state
      };
    },
    updateBook(state, { payload }) {
      return {
        ...state,
        bookData: payload.data
      };
    },
    updateBookFail(state, { payload }) {
      Toast.fail(payload.error, ERROR_MSG_DURATION);
      return {
        ...state
      };
    },
    changePostImages(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
