import { gql } from "@apollo/client";

const GET_ARTISTS = gql`
  query GetArtists($query: String!) {
    search {
      artists(query: $query) {
        nodes {
          id
          mbid
          name
          gender
          type
          disambiguation
        }
      }
    }
  }
`;

const GET_RELEASES = gql`
  query GetReleasesByArtist($mbid: MBID!) {
    lookup {
      artist(mbid: $mbid) {
        id
        name
        mbid
        gender
        type
        disambiguation
        releases {
          nodes {
            id
            title
            status
            date
            coverArtArchive {
              front
            }
          }
        }
      }
    }
  }
`;

export { GET_ARTISTS, GET_RELEASES };
