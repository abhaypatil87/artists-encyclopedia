import {
  AppBar,
  Box,
  Button,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { styled } from "@material-ui/core/styles";
import i18n from "i18next";

const StyledLink = styled(Button)(({ theme }) => ({
  textTransform: "none",
  textDecoration: "none",
  color: "white",
}));

const Header = () => {
  const [t] = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: "#2a2a2a" }}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Box>
            <Typography variant="h6" noWrap component="div">
              {t("header")}
            </Typography>
          </Box>
          <Box marginLeft={"auto"}>
            <StyledLink onClick={() => changeLanguage("eng")}>
              {t("language_english")}
            </StyledLink>
            |
            <StyledLink onClick={() => changeLanguage("fr")}>
              {" "}
              {t("language_french")}
            </StyledLink>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
