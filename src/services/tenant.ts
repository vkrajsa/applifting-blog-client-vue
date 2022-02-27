import api from './api';

export function getTenant() {
  return api.get(`/tenants/${process.env.VUE_APP_TENANT_ID}`);
}
