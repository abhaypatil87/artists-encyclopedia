import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

interface IconProps {
  isFavourite: boolean | undefined;
}

const FavouriteIcon = ({ isFavourite }: IconProps) => {
  return isFavourite ? (
    <FavoriteIcon style={{ color: "orangered" }} />
  ) : (
    <FavoriteBorderIcon />
  );
};

export default FavouriteIcon;
