import { request } from '../utils';

export function login(params) {
  return request('/api/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: params
  });
}

export function signup(params) {
  return request('/api/signup', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: params
  });
}
