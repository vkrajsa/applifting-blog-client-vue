import { computed, ref, Ref } from 'vue';
import store from '@/store/index';
import { getImg, deleteImg } from '../services/image';
import { dispatchNotification } from '../utils/notification';

export const useImage = () => {
  const imageUrl: Ref<string | null> = ref(null);
  // const error = ref(nTull);
  // const loading = ref(null);

  async function downloadImage(id: string) {
    try {
      const image = await getImg(id);
      imageUrl.value = URL.createObjectURL(image.data);
    } catch (error) {
      dispatchNotification(error.response.status);
    }
  }

  return { imageUrl, downloadImage };
};
