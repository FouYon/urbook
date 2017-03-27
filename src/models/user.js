/* global localStorage, window */
import { Toast } from 'antd-mobile';
import { updateuser } from '../services/user';

const ERROR_MSG_DURATION = 3; // 3 秒

export default {
  namespace: 'user',
  state: {
    name: '',
    brief: '',
    files: []
  },
  effects: {
    *updateuser({ payload }, { call, put }) {
      const postData = {
        url: payload.files[0].url,
        name: payload.name,
        brief: payload.brief,
        phone: localStorage.getItem('phone')
      };
      const { data } = yield call(updateuser, postData);
      if (data.message) {
        yield put({ type: 'updateSuccess', payload: data });
      } else {
        yield put({ type: 'updateFail', payload: data });
      }
    }
  },
  reducers: {
    updateUser(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    updateSuccess(state, { payload }) {
      Toast.success(payload.message, ERROR_MSG_DURATION);
      return {
        ...state
      };
    },
    updateFail(state, { payload }) {
      Toast.fail(payload.error, ERROR_MSG_DURATION);
      return {
        ...state
      };
    }
  }
};
