export default class Storage<T = unknown> {
  private readonly key: string;

  constructor(key: string) {
    this.key = key;
  }

  get() {
    try {
      const token = localStorage.getItem(this.key) ?? '';
      return JSON.parse(token);
    } catch (error) {
      return null;
    }
  }

  set(token: T): void {
    const parsedToken = JSON.stringify(token);
    localStorage.setItem(this.key, parsedToken);
  }

  remove(): void {
    localStorage.removeItem(this.key);
  }
}
