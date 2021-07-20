import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/styles";
import { styled } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import { RootStateOrAny, useSelector } from "react-redux";
import { Paper, InputBase, IconButton } from "@material-ui/core";

import debouncer from "../../utils/debouncer";
import { BasicArtist } from "../../declarations";
import { isArtistFavourite } from "../../utils/utils";
import { GET_ARTISTS } from "../../graphql/queries";
import { searchHistory } from "../../store/store";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    display: "flex",
    paddingLeft: "10px",
  },
  input: {
    flex: 1,
  },
});

const Search = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    marginBottom: theme.spacing(3),
    width: "auto",
  },
}));

interface SearchPropOptions {
  setResults: Function;
  isLoading: Function;
}

const SearchBar = ({ setResults, isLoading }: SearchPropOptions) => {
  const classes = useStyles();
  const [t] = useTranslation();
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearchInput = debouncer(searchInput);
  const [searchDisabled, setSearchDisabled] = useState(true);
  const favouriteArtists = useSelector(
    (state: RootStateOrAny) => state.favourites.favourites
  );

  const [getArtists, result] = useLazyQuery(GET_ARTISTS, {
    variables: {
      query: searchInput.toString().trim(),
    },
  });

  /* Execute this as soon as the component mounts */
  useEffect(() => {
    const lastSavedSearch = searchHistory.getLastSavedSearch();
    if (lastSavedSearch && lastSavedSearch.length > 0) {
      setSearchInput(lastSavedSearch);
    }
  }, []);

  useEffect(() => {
    if (debouncedSearchInput && debouncedSearchInput.length > 0) {
      searchHistory.setLastSavedSearch(debouncedSearchInput);
      getArtists();
    }
  }, [getArtists, debouncedSearchInput]);

  useEffect(() => {
    isLoading(result.loading);
    if (result.data) {
      const nodes: Array<BasicArtist> = [];
      result.data.search.artists.nodes.forEach((node: BasicArtist) => {
        const newNode = { ...node };
        newNode.isFavourite = isArtistFavourite(favouriteArtists, node);
        nodes.push(newNode);
      });
      setResults(nodes);
    } else {
      setResults([]);
    }
  }, [setResults, result, favouriteArtists, isLoading]);

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    if (searchInput !== null) {
      if (searchInput.trim().length === 0) {
        setSearchDisabled(true);
      } else {
        setSearchDisabled(false);
      }
    }
  };

  const clearSearchHandler = () => {
    setSearchInput("");
    setSearchDisabled(true);
    searchHistory.clear();
  };

  return (
    <Search>
      <Paper
        className={classes.root}
        component="form"
        onSubmit={formSubmitHandler}
        variant="outlined"
      >
        <InputBase
          className={classes.input}
          aria-label={t("searchbar_search_artists")}
          placeholder={t("searchbar_search_artists")}
          spellCheck={false}
          name={"searchbox"}
          inputMode={"search"}
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        {!searchDisabled && (
          <IconButton
            type="button"
            aria-label={t("searchbar_clear_search")}
            onClick={clearSearchHandler}
          >
            <ClearIcon />
          </IconButton>
        )}
        <IconButton
          type="submit"
          aria-label={t("searchbar_search_artists")}
          aria-disabled={searchDisabled}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Search>
  );
};

export default SearchBar;
