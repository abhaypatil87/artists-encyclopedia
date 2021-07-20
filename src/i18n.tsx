import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        language_english: "English",
        language_french: "French",
        header: "An Encyclopedia of Artists",
        header_favourites: "Favourites",
        header_artists: "Artists",
        sidebar_menu_favourites: "Favourites",
        artist_table_header_artist_name: "Artist Name",
        artist_table_header_artist_type: "Type",
        artist_table_header_artist_gender: "Gender",
        artist_table_caption: "Contains total {{count}} artist",
        artist_table_caption_plural: "Contains total {{count}} artists",
        artist_table_aria_label:
          "A table showing artists from your most recent search",
        favourites_table_no_favourite:
          "No favourite artists have been saved yet!",
        favourites_table_aria_label:
          "A table containing your favourite artists",
        artist_details_artist_details: "Artist Details",
        artist_actions_set_favourite:
          "{{artist}} has been added to your favourites",
        artist_actions_unset_favourite:
          "{{artist}} has been removed from your favourites",
        artist_actions_button_aria_label_favourite: "Press to unfavourite",
        artist_actions_button_aria_label_unfavourite: "Press to favourite",
        artist_view_button_aria_label_unfavourite_all: "Clear all favourites",
        artists_view_button_unfavourite_all: "Clear all",
        artist_actions_unset_all: "All favourite artists have been removed",
        artists_view_loading_search_results: "loading search results",
        artists_view_no_results_found: "no results found",
        artists_view_no_results_found_refine:
          "No results found. Please refine your search criteria",
        searchbar_search_artists: "Search Artists",
        searchbar_clear_search: "Clear Search",
      },
    },
    fr: {
      translations: {
        language_english: "Anglais",
        language_french: "Français",
        header: "Une encyclopédie des artistes",
        header_favourites: "Favourites",
        header_artists: "Artists",
        sidebar_menu_favourites: "Favourites",
        artist_table_header_artist_name: "Artist Name",
        artist_table_header_artist_type: "Type",
        artist_table_header_artist_gender: "Gender",
        artist_table_caption: "Contains total {{count}} artist",
        artist_table_caption_plural: "Contains total {{count}} artists",
        artist_table_aria_label:
          "A table showing artists from your most recent search",
        favourites_table_no_favourite:
          "No favourite artists have been saved yet!",
        favourites_table_aria_label:
          "A table containing your favourite artists",
        artist_details_artist_details: "Artist Details",
        artist_actions_set_favourite:
          "{{artist}} has been added to your favourites",
        artist_actions_unset_favourite:
          "{{artist}} has been removed from your favourites",
        artist_actions_button_aria_label_favourite: "Press to unfavourite",
        artist_actions_button_aria_label_unfavourite: "Press to favourite",
        artist_view_button_aria_label_unfavourite_all: "Clear all favourites",
        artists_view_button_unfavourite_all: "Clear all",
        artist_actions_unset_all: "All favourite artists have been removed",
        artists_view_loading_search_results: "loading search results",
        artists_view_no_results_found: "no results found",
        artists_view_no_results_found_refine:
          "No results found. Please refine your search criteria",
        searchbar_search_artists: "Search Artists",
        searchbar_clear_search: "Clear Search",
      },
    },
  },
  fallbackLng: "en",
  debug: false,
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    wait: true,
  },
});

export default i18n;
