import store from '../store/index';
import _uniqueId from 'lodash/uniqueId';

export class CustomNotification {
  notificationType: string;

  constructor(public message: string, public code: number, public id: string) {
    this.message = message;
    this.code = code;
    this.notificationType = this.code >= 400 ? 'error' : 'success';
    this.id = id;
  }
}

export function setNotificationMessage(statusCode: number): string {
  switch (statusCode) {
    case 400:
      return 'Invalid password or username.';
    case 401:
      return 'You are not authorized, please log in.';
    case 404:
      return 'We couldnt find the page you are looking for.';
    default:
      return 'There has been a problem.';
  }
}

export function dispatchNotification(statusCode: number): void {
  const message = setNotificationMessage(statusCode);

  store.dispatch('notifications/add', new CustomNotification(message, statusCode, _uniqueId()), { root: true });
}
