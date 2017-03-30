/* global localStorage, window, document */
import { Toast } from 'antd-mobile'
import { updateuser, getuser } from '../services/user'

const ERROR_MSG_DURATION = 3 // 3 秒

export default {
  namespace: 'user',
  state: {
    name: '',
    brief: '',
    files: [],
    avator: ''
  },
  effects: {
    *updateuser({ payload }, { call, put }) {
      const postData = {
        url: payload.files[0].url,
        name: payload.name,
        brief: payload.brief,
        phone: localStorage.getItem('phone')
      }
      const { data } = yield call(updateuser, postData)
      if (data.message) {
        yield put({ type: 'updateSuccess', payload: data })
      } else {
        yield put({ type: 'updateFail', payload: data })
      }
    },
    *getuser({ payload }, { call, put }) {
      const phone = localStorage.getItem('phone')
      const { data } = yield call(getuser, { phone })
      const { name, brief, avator } = data.data
      if (data.message) {
        yield put({ type: 'updateUser', payload: { name, brief, avator } })
      } else {
        yield put({ type: 'updateFail', payload: data })
      }
    }
  },
  reducers: {
    updateUser(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    },
    updateSuccess(state, { payload }) {
      Toast.success(payload.message, ERROR_MSG_DURATION)
      const clears = document.getElementsByName('clear')
      clears.forEach((el) => {
        el.value = ''
      })
      return {
        ...state,
        files: []
      }
    },
    updateFail(state, { payload }) {
      Toast.fail(payload.error, ERROR_MSG_DURATION)
      return {
        ...state
      }
    }
  }
}
