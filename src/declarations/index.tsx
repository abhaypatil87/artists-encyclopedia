export interface BasicArtist {
  id: string;
  mbid: string;
  name: string;
  disambiguation: string;
  gender: string | null;
  type: string;
  isFavourite?: boolean;
}

export interface ArtistsData {
  search: {
    artists: {
      nodes: Array<BasicArtist>;
    };
  };
}

export interface Release {
  id: string;
  mbid: string;
  title: string;
  date: string;
  status: string;
}

export interface ReleaseWithCover extends Release {
  coverArtArchive: {
    front: string | null;
  };
}

export enum Operation {
  SET = "SET",
  UNSET = "UNSET",
  UNSET_ALL = "UNSET_ALL",
}

export interface Storage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}
