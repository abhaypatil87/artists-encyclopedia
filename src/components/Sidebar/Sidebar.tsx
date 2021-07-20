import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { styled } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    transition: "0.3s",
    color: "#397BA6",
    backgroundColor: "#998c8c",
  },
}));

const Sidebar = () => {
  const [t] = useTranslation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        <StyledLink to="/favourites">
          <ListItem key={"Favourites"}>
            <ListItemIcon>
              <FavoriteBorderIcon />
            </ListItemIcon>
            <ListItemText primary={t("sidebar_menu_favourites")} />
          </ListItem>
        </StyledLink>
      </List>
    </Drawer>
  );
};

export default Sidebar;
