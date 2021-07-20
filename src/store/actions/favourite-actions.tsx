import { BasicArtist, Operation } from "../../declarations";
import { dispatchSuccess } from "./utils";
import { favouritesActions } from "../store";

export const setFavouriteArtist = (artist: BasicArtist, message: string) => {
  return (dispatch: Function) => {
    dispatch(favouritesActions.add(artist));
    dispatchSuccess(dispatch, Operation.SET, message);
  };
};

export const unsetFavouriteArtist = (artist: BasicArtist, message: string) => {
  return (dispatch: Function) => {
    dispatch(favouritesActions.remove(artist));
    dispatchSuccess(dispatch, Operation.UNSET, message);
  };
};

export const unsetAllFavouriteArtists = (message: string) => {
  return (dispatch: Function) => {
    dispatch(favouritesActions.removeAll());
    dispatchSuccess(dispatch, Operation.UNSET_ALL, message);
  };
};
