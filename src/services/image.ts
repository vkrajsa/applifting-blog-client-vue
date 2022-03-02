import api from './api';

export async function postImg(img: File) {
  return await api.post(`/images`, img);
}

export async function getImg(imgId: string) {
  return await api.get(`/images/${imgId}`);
}

export async function deleteImg(imgId: string) {
  return await api.delete(`/images/${imgId}`);
}
