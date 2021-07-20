import StorageWrapper from "../utils/storage";

enum Keys {
  LAST_SAVED_SEARCH = "last_saved_search",
}

export default class SearchHistory extends StorageWrapper<Keys> {
  private static instance?: SearchHistory;

  private constructor() {
    super();
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new SearchHistory();
    }

    return this.instance;
  }

  public getLastSavedSearch() {
    return this.get(Keys.LAST_SAVED_SEARCH);
  }

  public setLastSavedSearch(searchTerm: string) {
    this.set(Keys.LAST_SAVED_SEARCH, searchTerm);
  }

  public clear() {
    this.clearItems([Keys.LAST_SAVED_SEARCH]);
  }
}
