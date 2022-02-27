import api from './api';

export async function postVoteUp(id: string) {
  return await api.post(`/comments/${id}/vote/up`);
}

export async function postVoteDown(id: string) {
  return await api.post(`/comments/${id}/vote/down`);
}
