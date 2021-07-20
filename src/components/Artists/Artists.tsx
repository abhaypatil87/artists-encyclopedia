import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { useTranslation } from "react-i18next";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableContainer,
} from "@material-ui/core";

import { ArtistTile } from "../ArtistTile";
import { BasicArtist } from "../../declarations";
import FavouriteIcon from "../FavouriteIcon";
import {
  setFavouriteArtist,
  unsetFavouriteArtist,
} from "../../store/actions/favourite-actions";
import {
  StyledTableCell,
  StyledTableRow,
  TableCaption,
  TableHeader,
} from "./index";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  actionsCell: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const Artists = (props: { artists: BasicArtist[] }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const [artists, setArtists] = useState([...props.artists]);

  const handleFavouriteClick = (artist: BasicArtist) => {
    const newArtist = { ...artist };
    newArtist.isFavourite = !artist.isFavourite;

    const index = artists.findIndex((node) => node.mbid === artist.mbid);
    setArtists([
      ...artists.slice(0, index),
      newArtist,
      ...artists.slice(index + 1),
    ]);
    if (newArtist.isFavourite) {
      dispatch(
        setFavouriteArtist(
          newArtist,
          t("artist_actions_set_favourite", {
            artist: newArtist.name,
          })
        )
      );
    } else {
      dispatch(
        unsetFavouriteArtist(
          newArtist,
          t("artist_actions_unset_favourite", {
            artist: newArtist.name,
          })
        )
      );
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        aria-label={t("artist_table_aria_label")}
      >
        <TableCaption length={artists.length} />
        <TableHeader />
        <TableBody>
          {artists.map((artist) => (
            <StyledTableRow key={artist.id}>
              <StyledTableCell component="th" scope="row">
                <ArtistTile compact={true} artist={artist} />
              </StyledTableCell>
              <StyledTableCell align="right">{artist.type}</StyledTableCell>
              <StyledTableCell align="right">{artist.gender}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  className={classes.actionsCell}
                  onClick={handleFavouriteClick.bind(null, artist)}
                  aria-label={t(
                    artist.isFavourite
                      ? "artist_actions_button_aria_label_favourite"
                      : "artist_actions_button_aria_label_unfavourite"
                  )}
                >
                  <FavouriteIcon isFavourite={artist.isFavourite} />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Artists;
