import { request } from '../utils';

export function updateuser(params) {
  return request('/api/user', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: params
  });
}
