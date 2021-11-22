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
}

export { Helpers };
