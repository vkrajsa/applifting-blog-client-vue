import store from '@/store/index';
import { getTenant } from '@/services/tenant';
import { dispatchNotification } from '../utils/notification';

export async function setTenant() {
  try {
    const tenant = await getTenant();
    console.log(tenant.data.name);
    store.dispatch('user/dispatchTenant', tenant.data.name, { root: true });
  } catch (error) {
    dispatchNotification(error.response.status);
  }
}
