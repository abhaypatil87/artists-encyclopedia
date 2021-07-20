import React, { useState } from "react";
import { Artists } from "../components/Artists";
import { SearchBar } from "../components/SearchBar";
import { Helmet } from "react-helmet";
import { Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const ArtistsView = () => {
  const [t] = useTranslation();
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);

  const renderHelmet = () => {
    return (
      <Helmet>
        <title>{t("header")}</title>
        <meta
          name="description"
          content="A GraphQL client of MusicBrainz that lets you save your favourite artists locally in your browser!"
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

  const renderEmptyResults = () => {
    return (
      <Box
        component={"div"}
        aria-label={t("artists_view_no_results_found")}
        aria-live={"polite"}
      >
        {t("artists_view_no_results_found_refine")}
      </Box>
    );
  };
  return (
    <>
      {renderHelmet()}

      <SearchBar setResults={setArtists} isLoading={setLoading} />
      {loading && renderLoading()}
      {artists.length === 0 && !loading && renderEmptyResults()}
      {artists.length > 0 && <Artists artists={artists} />}
    </>
  );
};

export default ArtistsView;
