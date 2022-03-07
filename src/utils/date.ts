export function dateFormat(date: string): string {
  return new Date(date).toLocaleDateString();
}

export const sortByDate = (items: any): [] => {
  return items.sort(function (a: any, b: any) {
    const date1 = new Date(a.createdAt).getTime();
    const date2 = new Date(b.createdAt).getTime();
    return date2 - date1;
  });
};

export function timeAgo(date: string): string {
  // Hacky way - to get offset for both server and user date to remove it later and get relative time
  const userTimeOffset = new Date().getTimezoneOffset();
  const serverTimeToLocale = new Date(date).toLocaleString();
  const serverTimeOffset = new Date(serverTimeToLocale).getTimezoneOffset();

  const MINUTE_IN_MS = 60000;
  const SECOND_IN_MS = 1000;

  // Remove offset for both server and local time get exact UTC
  const currentTime = new Date().getTime() - userTimeOffset * MINUTE_IN_MS;
  const createdTime = new Date(date).getTime() - serverTimeOffset * MINUTE_IN_MS;

  const seconds = Math.floor(currentTime - createdTime) / SECOND_IN_MS;
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return 'now';
  } else if (minutes < 2) {
    return `1 minute ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 2) {
    return `1 hour ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 2) {
    return `${days} day ago`;
  } else if (days < 365) {
    return `${days} days ago`;
  } else if (years < 2) {
    return `1 year ago`;
  } else {
    return `${years} ago`;
  }
}
