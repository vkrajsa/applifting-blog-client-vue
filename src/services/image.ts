import api from './api';

async function postImg(img: string) {
  const response = await api.post(`/images`, img);
  console.log('response: ', response);
}

async function getImg(imgId: string) {
  const response = await api.get(`/images/${imgId}`);
  console.log('response: ', response);
}

async function deleteImg(imgId: string) {
  const response = await api.delete(`/images/${imgId}`);
  console.log('response: ', response);
}
