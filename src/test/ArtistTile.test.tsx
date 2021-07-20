import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { cleanup, render, screen } from "@testing-library/react";

import { BasicArtist } from "../declarations";
import { ArtistTile } from "../components/ArtistTile";

const initialStore = {
  favourites: [],
  notifications: { notification: null },
};

const artist = {
  id: "id1",
  mbid: "mbid1",
  name: "Sting",
  gender: "Male",
  type: "Person",
  isFavourite: true,
  disambiguation: "famous artist",
};

const renderArtistTile = (artist: BasicArtist, compact: boolean) => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialStore);

  render(
    <BrowserRouter>
      <Provider store={store}>
        <ArtistTile artist={artist} compact={compact} />
      </Provider>
    </BrowserRouter>
  );
};

describe("ArtistTile", () => {
  it("renders ArtistTile component", () => {
    renderArtistTile(artist, true);
    expect(screen.getByText(/Sting/i)).toBeTruthy();
  });

  it("renders ArtistTile component with compact mode", () => {
    renderArtistTile(artist, true);
    expect(screen.getByText(/Sting/i)).toBeTruthy();
    expect(screen.queryByText(/Person/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId(/button/i)).not.toBeInTheDocument();
  });

  it("renders ArtistTile component with detailed mode", () => {
    renderArtistTile(artist, false);
    expect(screen.getByText(/Sting/i)).toBeTruthy();
    expect(screen.queryByText(/Person/i)).toBeInTheDocument();
    expect(screen.getByRole(/button/i)).toBeInTheDocument();
  });
});

afterEach(cleanup);
