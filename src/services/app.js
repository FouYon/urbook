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

export function getcomments(params) {
  return request('/api/comments', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params
  });
}

export function getbook(params) {
  return request('/api/book', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params
  });
}
