import {
  TableCell,
  tableCellClasses,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

import Artists from "./Artists";
import Favourites from "./Favourites";
import { useTranslation } from "react-i18next";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#54524c",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    backgroundColor: "#c7c7c7",
  },
}));

export const TableCaption = ({ length }: { length: number }) => {
  const [t] = useTranslation();
  const message = t("artist_table_caption", { count: length });
  return (
    <caption>
      <Typography variant={"subtitle2"}>{message}</Typography>
    </caption>
  );
};

export const TableHeader = () => {
  const [t] = useTranslation();
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>
          {t("artist_table_header_artist_name")}
        </StyledTableCell>
        <StyledTableCell align="right">
          {t("artist_table_header_artist_type")}
        </StyledTableCell>
        <StyledTableCell align="right">
          {t("artist_table_header_artist_gender")}
        </StyledTableCell>
        <StyledTableCell align="right" />
      </TableRow>
    </TableHead>
  );
};

export { Artists, Favourites, StyledTableCell, StyledTableRow };
