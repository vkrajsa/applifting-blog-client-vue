import { computed, ref, Ref } from 'vue';
import store from '@/store/index';
import { postImg, getImg, deleteImg } from '../services/image';
import { dispatchNotification } from '../utils/notification';

export const useImage = () => {
  const imageUrl: Ref<string | null> = ref(null);
  const error: Ref<string | null> = ref(null);
  const imageLoader: Ref<boolean | null> = ref(null);

  async function postImage(data: FormData) {
    try {
      imageLoader.value = true;

      const result = await postImg(data);

      dispatchNotification(200, 'Image uploaded to the server. Click publish to save article changed.');

      return result;
    } catch (error) {
      dispatchNotification(500, 'Error while uploading image');
    } finally {
      imageLoader.value = false;
    }
  }

  async function downloadImage(id: string) {
    try {
      imageLoader.value = true;

      const image = await getImg(id);

      imageUrl.value = URL.createObjectURL(image.data);
    } catch (error) {
      // TODO: DISPLAY ERROR IN IMAGE COMPONENT IF THE IMAGE WAS NOT LOADED PROPERLY.
      error.value = 'Failed to load image';
    } finally {
      imageLoader.value = false;
    }
  }

  async function deleteImage(id: string) {
    try {
      imageLoader.value = true;

      const image = await deleteImg(id);

      imageUrl.value = null;
      dispatchNotification(200, 'Image deleted from the server.');
    } catch (error) {
      dispatchNotification(error.response.status, 'Error while deleting image');
    } finally {
      imageLoader.value = false;
    }
  }

  return { postImage, imageUrl, imageLoader, downloadImage, deleteImage };
};
