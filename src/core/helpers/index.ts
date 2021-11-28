import { Feed, Like, Role, User } from "../models";

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

  static isEmpty<T>(array: T[] | string | null | undefined): boolean {
    if (array === null || array === undefined) return true;
    return array.length === 0;
  }

  static isNotEmpty<T>(array: T[] | string | null | undefined): boolean {
    return !this.isEmpty(array);
  }

  static formatUrl(img: string): string {
    const apiUrl = `${import.meta.env.VITE_BASE_API_URL}`;
    return `${apiUrl}/${img}`;
  }

  static searchByName(array: Feed[], name: string): Feed[] {
    return array.filter((feed) =>
      feed.user.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  static isMyFeed(feed: Feed, user: User): boolean {
    return feed.userId === user.id;
  }

  static isAdmin(user: User): boolean {
    return user.role === Role.ADMIN;
  }

  static canDeleteFeed(feed: Feed, user: User): boolean {
    return this.isMyFeed(feed, user) || this.isAdmin(user);
  }

  static isLiked(likes: Like[], userId: string): boolean {
    const isLiked = likes.filter((like) => like.userId === userId);
    return isLiked.length > 0;
  }

  static countLikes(likes: Like[]): string {
    if (this.isEmpty(likes)) return "";

    if (likes.length == 0) return "1 Like";
    return `${likes.length} Likes`;
  }
}

export { Helpers };
