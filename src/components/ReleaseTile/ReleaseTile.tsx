import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import { ReleaseWithCover } from "../../declarations";
import { styled } from "@material-ui/core/styles";
import { DEFAULT_RELEASE_COVERT_CDN_URL } from "../../utils/utils";

const ReleaseCover = styled(Paper)(({ theme }) => ({
  display: "inline-block",
  marginTop: theme.spacing(2),
  marginRight: theme.spacing(2),
  padding: theme.spacing(2),
  maxWidth: "140px",
  position: "relative",
  verticalAlign: "top",
  textAlign: "center",
}));

const CoverImage = styled("img")(({ theme }) => ({
  width: "100%",
}));

const getReleaseCoverUrl = (release: ReleaseWithCover) => {
  return release.coverArtArchive.front !== null
    ? release.coverArtArchive.front
    : DEFAULT_RELEASE_COVERT_CDN_URL;
};

interface ReleaseTileProps {
  release: ReleaseWithCover;
}
const ReleaseTile = ({ release }: ReleaseTileProps) => {
  return (
    <ReleaseCover
      key={release.id}
      elevation={2}
      tabIndex={0}
      aria-label={release.title}
    >
      <CoverImage src={getReleaseCoverUrl(release)} alt={release.title} />
      <Box component={"div"} key={release.mbid}>
        {release.title},
        <Typography variant={"subtitle2"}>({release.date})</Typography>
      </Box>
    </ReleaseCover>
  );
};

export default ReleaseTile;
