export function dateFormat(date: string): Date {
  return new Date(date).toLocaleDateString();
}
