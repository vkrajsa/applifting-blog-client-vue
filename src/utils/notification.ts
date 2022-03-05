import store from '../store/index';
import _uniqueId from 'lodash/uniqueId';

export class CustomNotification {
  constructor(public message: string, public code: number, public id: string) {
    this.message = message;
    this.code = code;
    // this.notificationType = this.code >= 400 ? 'error' : 'success';
    this.id = id;
  }
  notificationType(): string {
    if (this.code >= 400) {
      return 'alert-danger';
    } else if (this.code >= 200) {
      return 'alert-success';
    } else {
      return 'alert-warning';
    }
  }
}

export function setNotificationMessage(statusCode: number): string {
  switch (statusCode) {
    case 200:
      return 'Success, all went well.';
    case 400:
      return 'Invalid password or username.';
    case 401:
      return 'You are not authorized, please log in.';
    case 403:
      return 'You are not authorized, please try to log in again.';
    case 404:
      return 'We couldnt find the page you are looking for.';
    default:
      return 'There has been a problem.';
  }
}

export function dispatchNotification(statusCode: number, customMessage?: string): void {
  const message = customMessage ?? setNotificationMessage(statusCode);

  store.dispatch('notifications/add', new CustomNotification(message, statusCode, _uniqueId()), { root: true });
}
