import { computed, ref, Ref } from 'vue';
import store from '@/store/index';
import { getImg, deleteImg } from '../services/image';
import { dispatchNotification } from '../utils/notification';

export const useImage = () => {
  const imageUrl: Ref<string | null> = ref(null);
  const error: Ref<string | null> = ref(null);
  const loader: Ref<boolean | null> = ref(null);

  async function downloadImage(id: string) {
    try {
      loader.value = true;
      const image = await getImg(id);
      imageUrl.value = URL.createObjectURL(image.data);
    } catch (error) {
      // TODO: DISPLAY ERROR IN IMAGE COMPONENT IF THE IMAGE WAS NOT LOADED PROPERLY.
      error.value = 'Failed to load image';
    } finally {
      loader.value = false;
    }
  }

  async function removeImage(id: string) {
    try {
      loader.value = true;

      const image = await deleteImg(id);

      imageUrl.value = null;
    } catch (error) {
      dispatchNotification(error.response.status);
    } finally {
      loader.value = false;
    }
  }

  return { imageUrl, loader, downloadImage, removeImage };
};
