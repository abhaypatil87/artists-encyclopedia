import { makeStyles } from "@material-ui/styles";
import {
  StyledTableCell,
  StyledTableRow,
  TableCaption,
  TableHeader,
} from "./index";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableContainer,
} from "@material-ui/core";

import { ArtistTile } from "../ArtistTile";
import { BasicArtist } from "../../declarations";
import { handleFavouriteClick } from "../../utils/utils";
import FavouriteIcon from "../FavouriteIcon";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  table: {
    minWidth: 680,
  },
  actionsCell: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const Favourites = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [t] = useTranslation();

  const favouriteArtists = useSelector(
    (state: RootStateOrAny) => state.favourites.favourites
  );

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        aria-label={t("favourites_table_aria_label")}
      >
        <TableCaption length={favouriteArtists.length} />
        <TableHeader />
        <TableBody>
          {favouriteArtists.map((artist: BasicArtist) => (
            <StyledTableRow key={artist.id}>
              <StyledTableCell component="th" scope="row">
                <ArtistTile compact={true} artist={artist} />
              </StyledTableCell>
              <StyledTableCell align="right">{artist.type}</StyledTableCell>
              <StyledTableCell align="right">{artist.gender}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  className={classes.actionsCell}
                  onClick={handleFavouriteClick.bind(null, artist, dispatch)}
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
          {favouriteArtists.length === 0 && (
            <StyledTableRow>
              <StyledTableCell
                colSpan={4}
                aria-colspan={4}
                style={{ textAlign: "center" }}
              >
                {t("favourites_table_no_favourite")}
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Favourites;
