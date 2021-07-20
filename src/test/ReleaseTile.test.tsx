import { cleanup, render, screen } from "@testing-library/react";
import { ReleaseWithCover } from "../declarations";
import { ReleaseTile } from "../components/ReleaseTile";
import { DEFAULT_RELEASE_COVERT_CDN_URL } from "../utils/utils";

const renderReleaseTile = (release: ReleaseWithCover) => {
  render(<ReleaseTile release={release} />);
};

describe("ReleaseTile", () => {
  it("renders ReleaseTile component", () => {
    renderReleaseTile({
      id: "id1",
      mbid: "mbid1",
      title: "test release title",
      date: "2021-01-05",
      status: "",
      coverArtArchive: {
        front: null,
      },
    });
    expect(screen.getByText(/test release title/i)).toBeTruthy();
  });

  it("renders ReleaseTile component with correct image when cover image present", () => {
    renderReleaseTile({
      id: "id1",
      mbid: "mbid1",
      title: "test release title",
      date: "2021-01-05",
      status: "",
      coverArtArchive: {
        front:
          "http://coverartarchive.org/release/128d0cae-2c3e-42e0-9d84-54b1ddc5de3a/26586043315.jpg",
      },
    });
    expect(screen.getByAltText(/test release title/i)).toHaveAttribute(
      "src",
      "http://coverartarchive.org/release/128d0cae-2c3e-42e0-9d84-54b1ddc5de3a/26586043315.jpg"
    );
  });

  it("renders ReleaseTile component with default image when cover image null", () => {
    renderReleaseTile({
      id: "id1",
      mbid: "mbid1",
      title: "test release title",
      date: "2021-01-05",
      status: "",
      coverArtArchive: {
        front: null,
      },
    });
    expect(screen.getByAltText(/test release title/i)).toHaveAttribute(
      "src",
      DEFAULT_RELEASE_COVERT_CDN_URL
    );
  });
});

afterEach(cleanup);
