import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Box, Breadcrumbs, Button, Grid, Typography } from "@material-ui/core";

import { Favourites } from "../components/Artists";
import { useDispatch } from "react-redux";
import { unsetAllFavouriteArtists } from "../store/actions/favourite-actions";
import { useTranslation } from "react-i18next";

const FavouritesView = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation();

  const renderHelmet = () => {
    return (
      <Helmet>
        <title>
          {t("header_favourites")} | {t("header")}
        </title>
        <meta
          name="description"
          content="A GraphQL client of MusicBrainz that lets you save your favourite artists locally in your browser!"
        />
      </Helmet>
    );
  };

  return (
    <>
      {renderHelmet()}
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        marginBottom={2}
      >
        <Box>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/">
              {t("header_artists")}
            </Link>
            <Typography color="textPrimary">
              {t("header_favourites")}
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box marginLeft={"auto"}>
          <Typography
            variant="body1"
            component="span"
            tabIndex={0}
            aria-label={t("artist_view_button_aria_label_unfavourite_all")}
          >
            <Button
              variant={"text"}
              onClick={() =>
                dispatch(
                  unsetAllFavouriteArtists(t("artist_actions_unset_all"))
                )
              }
            >
              {t("artists_view_button_unfavourite_all")}
            </Button>
          </Typography>
        </Box>
      </Grid>
      <Favourites />
    </>
  );
};

export default FavouritesView;
