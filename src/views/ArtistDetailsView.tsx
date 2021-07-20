import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLazyQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { RootStateOrAny, useSelector } from "react-redux";
import { Box, Breadcrumbs, Typography } from "@material-ui/core";

import { GET_RELEASES } from "../graphql/queries";
import { ArtistTile } from "../components/ArtistTile";
import { BasicArtist, ReleaseWithCover } from "../declarations";
import { isArtistFavourite } from "../utils/utils";
import { ReleaseTile } from "../components/ReleaseTile";
import { useTranslation } from "react-i18next";

const initialArtistState = {
  id: "",
  mbid: "",
  name: "",
  gender: null,
  type: "",
  disambiguation: "",
  isFavourite: false,
};

const ArtistDetailsView = () => {
  const params = useParams();
  const [t] = useTranslation();
  const [releases, setReleases] = useState([]);
  const [artist, setArtist] = useState<BasicArtist>(initialArtistState);
  const [loading, setLoading] = useState(false);
  const favouriteArtists = useSelector(
    (state: RootStateOrAny) => state.favourites.favourites
  );
  const [getArtistReleases, result] = useLazyQuery(GET_RELEASES, {
    variables: {
      mbid: params.mbid.toString().trim(),
    },
  });

  useEffect(() => {
    getArtistReleases();
  }, [getArtistReleases]);

  useEffect(() => {
    setLoading(result.loading);
    if (result.data) {
      const { artist } = result.data.lookup;
      const newNode = { ...artist };
      newNode.isFavourite = isArtistFavourite(favouriteArtists, artist);
      setArtist(newNode);
      setReleases(artist.releases.nodes);
    } else {
      setReleases([]);
    }
  }, [setArtist, result, favouriteArtists]);

  const renderHelmet = () => {
    return (
      <Helmet>
        <title>
          {artist.name} | {t("header")}
        </title>
        <meta
          name="description"
          content={`Popular releases by ${artist.name}`}
        />
      </Helmet>
    );
  };

  const renderLoading = () => {
    return (
      <Box
        component={"div"}
        aria-label={t("artists_view_loading_search_results")}
        aria-live={"polite"}
      >
        Loading...
      </Box>
    );
  };

  return (
    <>
      {renderHelmet()}
      <Box component={"div"} marginBottom={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            Artists
          </Link>
          <Typography color="textPrimary">{artist.name} / Releases</Typography>
        </Breadcrumbs>
      </Box>
      <ArtistTile compact={false} artist={artist} />
      {loading && renderLoading()}
      {releases &&
        releases.map((release: ReleaseWithCover) => (
          <ReleaseTile key={release.id} release={release} />
        ))}
    </>
  );
};

export default ArtistDetailsView;
