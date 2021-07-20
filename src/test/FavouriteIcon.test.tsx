import { cleanup, render, screen } from "@testing-library/react";
import FavouriteIcon from "../components/FavouriteIcon";

const renderIcon = (isFavourite: boolean) => {
  render(<FavouriteIcon isFavourite={isFavourite} />);
};

describe("FavouriteIcon", () => {
  it("renders FavouriteIcon component", () => {
    renderIcon(true);
    expect(screen.getByTestId(/FavoriteIcon/i)).toBeTruthy();
  });

  it("render FavouriteIcon component with correct colour when favourite", () => {
    renderIcon(true);
    expect(screen.getByTestId(/FavoriteIcon/i)).toBeTruthy();
    expect(screen.getByTestId(/FavoriteIcon/i)).toHaveStyle({
      color: "orangered",
    });
  });

  it("render FavouriteIcon component with correct icon when not favourite", () => {
    renderIcon(false);
    expect(screen.queryByTestId(/FavoriteIcon/i)).not.toBeInTheDocument();
    expect(screen.getByTestId(/FavoriteBorderIcon/i)).toBeTruthy();
  });
});

afterEach(cleanup);
