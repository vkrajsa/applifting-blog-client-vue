import { computed, ref, Ref } from 'vue';
import store from '@/store/index';
import { getImg, deleteImg } from '../services/image';
import { dispatchNotification } from '../utils/notification';

export const useImage = () => {
  const imageUrl: Ref<string | null> = ref(null);
  // const error = ref(nTull);
  const loader: Ref<boolean | null> = ref(null);

  async function downloadImage(id: string) {
    try {
      loader.value = true;
      const image = await getImg(id);
      imageUrl.value = URL.createObjectURL(image.data);
    } catch (error) {
      dispatchNotification(error.response.status);
    } finally {
      loader.value = false;
    }
  }

  return { imageUrl, loader, downloadImage };
};
