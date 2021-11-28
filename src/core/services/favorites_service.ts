import { Feed } from "../models";
import { Strings } from "../values";

abstract class FavoritesService {
  static saveFavorites(feed: Feed): boolean {
    const favorites = this.getFavorites();
    if (favorites.length === 0) {
      localStorage.setItem(Strings.favorites, JSON.stringify([feed]));
      return true;
    }

    const index = favorites.findIndex((f) => f.id === feed.id);
    if (index === -1) {
      favorites.push(feed);
      localStorage.setItem(Strings.favorites, JSON.stringify(favorites));
      return true;
    }

    favorites.splice(index, 1);
    localStorage.setItem(Strings.favorites, JSON.stringify(favorites));

    return false;
  }

  static getFavorites(): Feed[] {
    const favorites = localStorage.getItem(Strings.favorites);
    return favorites ? JSON.parse(favorites) : [];
  }

  static isFavorite(feed: Feed): boolean {
    const favorites = this.getFavorites();
    return favorites.findIndex((f) => f.id === feed.id) !== -1;
  }
}

export { FavoritesService };
