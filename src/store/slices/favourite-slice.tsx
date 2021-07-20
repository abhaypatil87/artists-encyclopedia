import { createSlice } from "@reduxjs/toolkit";
import { getArtistMBIDs } from "../../utils/utils";
import { BasicArtist } from "../../declarations";

const initialFavouritesState = {
  favourites: [] as BasicArtist[],
};

const favouritesSlice = createSlice({
  name: "favouritesSlice",
  initialState: initialFavouritesState,
  reducers: {
    add(state, action) {
      const artist: BasicArtist = action.payload;
      let favouriteArtists = state.favourites;
      const mbIds = getArtistMBIDs(favouriteArtists);

      if (favouriteArtists.length === 0 || mbIds.indexOf(artist.mbid) === -1) {
        state.favourites.push(artist);
      }
    },
    remove(state, action) {
      const { mbid } = action.payload;
      state.favourites = state.favourites.filter(
        (artist) => artist.mbid !== mbid
      );
    },
    removeAll(state) {
      state.favourites = [];
    },
  },
});

export default favouritesSlice;
