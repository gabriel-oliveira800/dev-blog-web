abstract class Helpers {
  static firstItem<T>(array: T[]): T | null {
    if (array.length > 0) {
      return array[0];
    }

    return null;
  }

  static lastItem<T>(array: T[]): T {
    return array[array.length - 1];
  }

  static isEmpty<T>(array: T[] | string): boolean {
    return array.length === 0;
  }

  static isNotEmpty<T>(array: T[] | string): boolean {
    return !this.isEmpty(array);
  }
}

export { Helpers };
