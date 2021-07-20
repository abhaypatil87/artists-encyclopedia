import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

import { BasicArtist } from "../../declarations";
import { handleFavouriteClick } from "../../utils/utils";
import FavouriteIcon from "../FavouriteIcon";

interface ArticleTileProps {
  artist: BasicArtist;
  compact: boolean;
}

const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    color: "#397BA6",
    backgroundColor: "#998c8c",
  },
}));

const useStyles = makeStyles({
  artistName: {
    fontWeight: 400,
    fontSize: "20px",
  },
  artistTag: {
    fontWeight: 400,
    fontSize: "14px",
    color: "gray",
  },
});

const ArtistTile = ({ artist, compact }: ArticleTileProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [t] = useTranslation();

  const renderCompactView = () => {
    return (
      <StyledLink to={`/artists/${artist.mbid}`}>
        <Box component={"div"}>
          <Typography className={classes.artistName} variant={"h6"}>
            {artist.name}
          </Typography>
          <Typography className={classes.artistTag} variant={"subtitle2"}>
            {artist.disambiguation}
          </Typography>
        </Box>
      </StyledLink>
    );
  };

  const renderDetailedView = () => {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {t("artist_details_artist_details")}
          </Typography>
          <Typography variant="h5" component="div">
            {artist.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {artist.disambiguation}
          </Typography>
          <Typography variant="body2">
            {artist.type}
            <br />
            {artist.gender}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={handleFavouriteClick.bind(null, artist, dispatch)}
            aria-label={t(
              artist.isFavourite
                ? "artist_actions_button_aria_label_favourite"
                : "artist_actions_button_aria_label_unfavourite"
            )}
          >
            <FavouriteIcon isFavourite={artist.isFavourite} />
          </Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <>
      {compact && renderCompactView()}
      {!compact && renderDetailedView()}
    </>
  );
};

export default ArtistTile;
