import { BasicArtist } from "../declarations";
import {
  setFavouriteArtist,
  unsetFavouriteArtist,
} from "../store/actions/favourite-actions";
import i18n from "i18next";

export function getArtistMBIDs(artists: Array<BasicArtist>) {
  return artists.map((artist) => artist.mbid);
}

export function isArtistFavourite(
  artists: Array<BasicArtist>,
  artist: BasicArtist
) {
  const favouriteArtistsMBIDs = getArtistMBIDs(artists);
  return favouriteArtistsMBIDs.indexOf(artist.mbid) !== -1;
}

export function handleFavouriteClick(artist: BasicArtist, dispatch: Function) {
  const newArtist = { ...artist };
  newArtist.isFavourite = !artist.isFavourite;
  if (newArtist.isFavourite) {
    dispatch(
      setFavouriteArtist(
        newArtist,
        i18n.t("artist_actions_set_favourite", { artist: newArtist.name })
      )
    );
  } else {
    dispatch(
      unsetFavouriteArtist(
        newArtist,
        i18n.t("artist_actions_unset_favourite", { artist: newArtist.name })
      )
    );
  }
}

export const DEFAULT_RELEASE_COVERT_CDN_URL = `https://cdn1.iconfinder.com/data/icons/gradak-music/32/music-33-512.png`;
